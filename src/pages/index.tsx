import Head from '@components/Head';
import { Container, PostsContainer } from '../styles/Home';
import Presentation from '@components/Sidebar';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import api from '../services/api';
interface Post {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    created_at: string;
}
interface Props {
    posts: Post[];
}
const Home = ({ posts }: Props) => {
    return (
        <Container>
            <Head title="Homepage" />
            <Presentation />
            <PostsContainer>
                {posts &&
                    posts.map((post) => (
                        <>
                            <Link
                                href={`posts/${post.slug}`}
                                key={post.id}
                                passHref
                            >
                                <a>
                                    <img
                                        src="https://github.com/ckauan.png"
                                        alt="Carlos Kauãn"
                                    />
                                    <div>
                                        <small>
                                            {new Date(
                                                post.created_at
                                            ).toLocaleDateString()}
                                        </small>
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </div>
                                </a>
                            </Link>
                            <Link
                                href={`posts/${post.slug}`}
                                key={post.id}
                                passHref
                            >
                                <a>
                                    <img
                                        src="https://github.com/ckauan.png"
                                        alt="Carlos Kauãn"
                                    />
                                    <div>
                                        <small>
                                            {new Date(
                                                post.created_at
                                            ).toLocaleDateString()}
                                        </small>
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </div>
                                </a>
                            </Link>
                        </>
                    ))}
            </PostsContainer>
        </Container>
    );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/posts');
    return {
        props: {
            posts: data,
        },
        redirect: 3600,
    };
};
