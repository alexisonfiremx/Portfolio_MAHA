import React, { useState, useEffect } from 'react';
import './Work.scss'
import { AiFillEye, AiFillGithub, AiOutlineInfoCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  console.log(filterWork)

  return (
      <>
      <h2 className="head-text">
        <strong className='stroke glitch' data-glitch="Blood,">Blood,</strong>
        <span className='glow'> Sweat & Code</span>
      </h2>

      <div className="app__work-filter">
        {[ 'Frontend', 'Fullstack', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >

                <img src={urlFor(work.imgUrl)} alt={work.name} data-tip data-for='sadFace' />


              <div
                // whileHover={{ opacity: [0, 1] }}
                // transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {work.projectLink ? (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                ) : null
                }
                { work.codeLink ?  (
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                  ) : null
                }
              </div>
            </div>
              <div className="app__work-content app__flex">
              <h4 className="bold-text">
                {work.title}
                {work.frontendTechnologies?
                          (
                            <AiOutlineInfoCircle
                                className='info__icon'
                                data-tip data-for={work.title}
                            />
                          ) : null
                        }

                  <ReactTooltip
                        id={work.title}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.frontendTechnologies?
                          (
                            <div>
                              <p className='subtitle'>Frontend Technologies: </p>
                              <ul>
                                <li>{work.frontendTechnologies}</li>
                              </ul>
                            </div>
                          ) : null
                        }
                        {work.backendTechnologies?
                          (
                            <div>
                              <p className='subtitle'>Backend Technologies: </p>
                              <ul>
                                <li>{work.backendTechnologies}</li>
                              </ul>
                            </div>
                          ) : null
                        }
                        {work.database?
                          (
                            <div>
                              <p className='subtitle'>Database: </p>
                              <ul>
                                <li>{work.database}</li>
                              </ul>
                            </div>
                          ) : null
                        } 

                  </ReactTooltip>
              </h4>
            </div>



          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work', 'app__primarybg'
  )