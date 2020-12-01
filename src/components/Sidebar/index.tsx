import { useState } from 'react';
import { Presentation } from './styles';
import { FiTwitter, FiAlignJustify } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery(
        {
            query: '(max-width: 980px)',
        },
        undefined,
        handleWindowWidthChange
    );

    function handleWindowWidthChange() {
        setMenuOpen(isMobile);
    }
    return (
        <Presentation>
            <div>
                <img src="https://github.com/ckauan.png" alt="Carlos Kauãn" />
                <h3>Carlos Kauãn</h3>
                <p>Back-end student 💻 NodeJS and Typescript | Self-taught</p>
                <div>
                    <a href="">
                        <FiTwitter size={28} color="#fff" />
                    </a>
                    <a href="">
                        <FiTwitter size={28} color="#fff" />
                    </a>
                    <a href="">
                        <FiTwitter size={28} color="#fff" />
                    </a>
                    <a href="">
                        <FiTwitter size={28} color="#fff" />
                    </a>
                </div>
            </div>
            <div>
                {isMobile && (
                    <>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <FiAlignJustify size={36} color="#FFF" />
                        </button>
                        {menuOpen && (
                            <>
                                <a href="">Home</a>
                                <a href="">Posts</a>
                                <a href="">Contato</a>
                            </>
                        )}
                    </>
                )}
                {!isMobile && !menuOpen && (
                    <>
                        <a href="">Home</a>
                        <a href="">Posts</a>
                        <a href="">Contato</a>
                    </>
                )}
            </div>
        </Presentation>
    );
};
export default Sidebar;
