import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './About.scss';

// const abouts = [
//   { title: 'Full-stack Development', description: 'I am a good full-stack developer.', imgUrl: images.about01 },
//   { title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about02 },
//   { title: 'Web Design', description: 'I am a good web designer.', imgUrl: images.about03 },
//   { title: 'UI/UX', description: 'I am a good.', imgUrl: images.about04}
// ]

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Development</span><br />means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About