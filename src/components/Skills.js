import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/montserrat";
import Html from '../img/html.png'
import Js from '../img/js.png'
import Css from '../img/css3.png'
import Jquery from '../img/jq.webp'
import Php from '../img/php.png'
import Mysqlo from '../img/mysql.png'
import Node from '../img/node.webp'
import Reacto from '../img/react.png'
import Sass from '../img/sass.png'
import Bs from '../img/bootstrap.png'
import Ps from '../img/ps.png'
import Ai from '../img/ai.png'
import Team from '../img/team.png'
import { motion } from "framer-motion"
import { Divider, Typography, Card, Avatar } from 'antd';
// import React, { useState } from 'react';
const { Text } = Typography;
const { Meta } = Card;

const Skills = () => {
    
    return (
        <>
            <div className='container'>
                <Text type="light" className='d-flex justify-content-center textant'>Desarrollo Web</Text>

                <Divider />

                <div className='row d-flex centraricons'>
                    <motion.div
                        animate={{
                            x: '30px'
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Html} />}
                                title="HTML5"
                                description="99%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Js} />}
                                title="JavaScript"
                                description="80%"
                            />
                        </Card>

                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Bs} />}
                                title="Bootstrap"
                                description="80%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Css} />}
                                title="CSS"
                                description="90%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Sass} />}
                                title="SASS"
                                description="70%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Jquery} />}
                                title="JQuery"
                                description="90%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Php} />}
                                title="PHP (ingles)"
                                description="90%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Mysqlo} />}
                                title="MySql"
                                description="90%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Node} />}
                                title="Node Js"
                                description="70%"
                            />
                        </Card>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                    >
                        <Card
                            className='cardbady'
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}

                        >
                            <Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={Reacto} />}
                                title="React Js"
                                description="70%"
                            />
                        </Card>
                    </motion.div>
                    {/*  */}
                    <Divider className='mt-4' />
                    <Text type="light" className='d-flex justify-content-center textant'>Diseño</Text>
                    <Divider />
                    <Card
                        className='cardbady'
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}

                    >
                        <Meta
                            avatar={<Avatar style={{ width: 50, height: 50 }} src={Ps} />}
                            title="Photoshop"
                            description="90%"
                        />
                    </Card>
                    <Card
                        className='cardbady'
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}

                    >
                        <Meta
                            avatar={<Avatar style={{ width: 50, height: 50 }} src={Ai} />}
                            title="Ilustrator"
                            description="90%"
                        />
                    </Card>
                    <Divider className='mt-4' />
                    <Text type="light" className='d-flex justify-content-center textant'>Transversales</Text>
                    <Divider />
                    <Card
                        className='cardbady'
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}

                    >
                        <Meta
                            avatar={<Avatar style={{ width: 50, height: 50 }} src={Team} />}
                            title="Trabajo en equipo"
                            description="99%"
                        />
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Skills