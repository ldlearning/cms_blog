import React, {useState} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
// import './NavBar.scss'
// import images from "../../constants/images";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-title">
               A developer journey's Blog
            </div>
            <ul className="app__navbar-links">
                <li className="app__flex p-text" key={`link-portfolio`}>
                    <div />
                    <a href={`http://danyleduc-porfolio.netlify.app`}>Back to Portfolio</a>
                </li>
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                                <li key={'portfolio'}>
                                    <a href={`http://danyleduc-porfolio.netlify.app`} onClick={() => setToggle(false)}>
                                        Back to Portfolio
                                    </a>
                                </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default NavBar