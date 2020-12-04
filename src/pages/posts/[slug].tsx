import { useRouter } from 'next/router';
import {
    Container,
    PostContainer,
    PostItem,
    PostContent,
    Image,
} from '../../styles/Post';
import Head from '@components/Head';
import Presentation from '@components/Sidebar';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../services/api';
import ReadingProgress from '@components/ReadingProgress';
import { createRef, useState } from 'react';
interface Post {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    thumbnail: {
        id: string;
        formats: {
            [key: string]: {
                url: string;
            };
        };
        url: string;
    };
    created_at: string;
}
interface Props {
    post: Post;
}

const Post = ({ post }: Props) => {
    const { back } = useRouter();
    const [like, setLike] = useState(false);
    const content = unified()
        .use(parse)
        .use(remark2react)
        .processSync(post.content).result as JSX.IntrinsicElements;
    const target = createRef<HTMLDivElement>();

    function likePost() {
        setLike(!like);
    }
    return (
        <Container>
            <Head title={post.title} />
            <Presentation />
            <PostContainer>
                <ReadingProgress target={target} />
                <header>
                    <button onClick={() => back()}>
                        <FiChevronLeft size={30} color="#ddd" />
                    </button>
                    <button>
                        {like ? (
                            <AiFillHeart
                                onClick={likePost}
                                size={30}
                                color="#ddd"
                            />
                        ) : (
                            <FiHeart
                                onClick={likePost}
                                size={30}
                                color="#ddd"
                            />
                        )}
                    </button>
                </header>
                <Image src={post.thumbnail.formats.medium.url} alt="" />
                {post && (
                    <PostItem>
                        <div>
                            <small>
                                {new Date(post.created_at).toLocaleDateString()}
                            </small>
                            <h1>{post.title}</h1>
                            <h4>{post.description}</h4>
                        </div>
                        <PostContent ref={target}>{content}</PostContent>
                    </PostItem>
                )}
            </PostContainer>
        </Container>
    );
};

export default Post;
export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get<Post[]>(`/posts`);
    const paths = data.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params!.slug!;
    const { data } = await api.get(`/posts/${slug}`);
    return {
        props: {
            post: data,
        },
        revalidate: 3600,
    };
};
