import Head from '@components/Head';
import { Container, PostsContainer } from '../styles/Home';
import Presentation from '@components/Sidebar';
const Home = () => {
    return (
        <Container>
            <Head title="Homepage" />
            <Presentation />
            <PostsContainer>
                <a href="posts/abc">
                    <img
                        src="https://github.com/ckauan.png"
                        alt="Carlos Kauãn"
                    />
                    <div>
                        <small>31 de Outubro de 2020 • 2 min de leitura</small>
                        <h2>
                            Mostrando últimos posts e vídeos no Github Profile
                        </h2>
                        <p>
                            Como utilizar o Github Actions para manter seu
                            profile atualizado e bonito.
                        </p>
                    </div>
                </a>
                <a href="">
                    <img
                        src="https://github.com/ckauan.png"
                        alt="Carlos Kauãn"
                    />
                    <div>
                        <small>31 de Outubro de 2020 • 2 min de leitura</small>
                        <h2>
                            Mostrando últimos posts e vídeos no Github Profile
                        </h2>
                        <p>
                            Como utilizar o Github Actions para manter seu
                            profile atualizado e bonito.
                        </p>
                    </div>
                </a>
                <a href="">
                    <img
                        src="https://github.com/ckauan.png"
                        alt="Carlos Kauãn"
                    />
                    <div>
                        <small>31 de Outubro de 2020 • 2 min de leitura</small>
                        <h2>
                            Mostrando últimos posts e vídeos no Github Profile
                        </h2>
                        <p>
                            Como utilizar o Github Actions para manter seu
                            profile atualizado e bonito.
                        </p>
                    </div>
                </a>
                <a href="">
                    <img
                        src="https://github.com/ckauan.png"
                        alt="Carlos Kauãn"
                    />
                    <div>
                        <small>31 de Outubro de 2020 • 2 min de leitura</small>
                        <h2>
                            Mostrando últimos posts e vídeos no Github Profile
                        </h2>
                        <p>
                            Como utilizar o Github Actions para manter seu
                            profile atualizado e bonito.
                        </p>
                    </div>
                </a>
            </PostsContainer>
        </Container>
    );
};
export default Home;
