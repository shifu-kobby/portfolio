import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://linkedin.com/in/samuel-appiah-8446a11b4'>
                    <AiFillLinkedin />
                </a>
            </div>
            <div>
                <a href='https://github.com/shifu-kobby'>
                    <AiFillGithub />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia