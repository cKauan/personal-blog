import { useRouter } from 'next/router';
import { Container, PostContainer } from '../../styles/Post';
import Head from '@components/Head';
import Presentation from '@components/Sidebar';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';
const Post = () => {
    const router = useRouter();
    // const { name } = router.query;
    function handleBackNavigation() {
        router.back();
    }
    return (
        <Container>
            <Head title="Homepage" />
            <Presentation />
            <PostContainer>
                <header>
                    <button onClick={handleBackNavigation}>
                        <FiChevronLeft size={30} />
                    </button>
                    <button>
                        <FiHeart size={30} />
                    </button>
                </header>
                {/* <div>
                    <small>31 de Outubro de 2020 • 2 min de leitura</small>
                    <h1>Happy Halloween! Caça ao tesouro!</h1>
                    <h4>
                        Tenha a chance de ganhar 1 curso de React Avançado de
                        graça!
                    </h4>
                    <p>
                        Fala pessoal, mantendo a ideia de ter vídeo, mas também
                        ter post escrito, hoje eu vou falar sobre um vídeo que
                        fiz recentemente que é o Mostrando últimos posts e
                        vídeos no Github Profile. O Github lançou essa
                        atualização deve ter aí, por volta de 1 mês, mas ainda
                        tem muita gente que não sabe como fazer e outros que
                        gostariam de fazer um "algo a mais", como, por exemplo,
                        mostrar os últimos posts escritos e coisas do gênero,
                        então vamos aprender como faz isso.
                    </p>
                </div> */}
            </PostContainer>
        </Container>
    );
};

export default Post;
