import { useRouter } from 'next/router';
import { Container, PostContainer } from '../../styles/Post';
import Head from '@components/Head';
import Presentation from '@components/Sidebar';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Post {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    created_at: string;
}
interface Props {
    post: Post;
}
const Post = ({ post }: Props) => {
    const { back } = useRouter();
    const content = unified()
        .use(parse)
        .use(remark2react)
        .processSync(post.content).result as JSX.IntrinsicElements;
    return (
        <Container>
            <Head title="Homepage" />
            <Presentation />
            <PostContainer>
                <header>
                    <button onClick={() => back()}>
                        <FiChevronLeft size={30} />
                    </button>
                    <button>
                        <FiHeart size={30} />
                    </button>
                </header>
                {post && (
                    <div>
                        <small>
                            {new Date(post.created_at).toLocaleDateString()}
                        </small>
                        <h1>{post.title}</h1>
                        <h4>{post.description}</h4>
                        <div>{content}</div>
                    </div>
                )}
            </PostContainer>
        </Container>
    );
};

export default Post;
export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.get<Post[]>(`http://localhost:5500/posts`);
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
    const { data } = await axios.get(`http://localhost:5500/posts/${slug}`);
    return {
        props: {
            post: data,
        },
        revalidate: 3600
    };
};
