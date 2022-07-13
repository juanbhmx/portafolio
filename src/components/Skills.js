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
import GH from '../img/gh.png'
// import { motion } from "framer-motion"
import { Divider, Typography, Card, Avatar, Progress } from 'antd';
const { Text } = Typography;
const { Meta } = Card;

const Skills = () => {
    return (
        <>
            <div className='container'>
                <Text type="light" className='d-flex justify-content-center textant'>Web development</Text>

                <Divider />
                <div className='row d-flex centraricons'>

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
                            description=""
                        />
                        <Progress percent={90} status="active" />
                    </Card>


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
                            description=""
                        />
                        <Progress percent={80} status="active" />
                    </Card>


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
                        // description="80%"
                        />
                        <Progress percent={80} status="active" />
                    </Card>

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
                        // description="90%"
                        />
                        <Progress percent={90} status="active" />
                    </Card>
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
                        // description="70%"
                        />
                        <Progress percent={70} status="active" />
                    </Card>

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
                        // description="90%"
                        />
                        <Progress percent={90} status="active" />
                    </Card>

                    <Card
                        className='cardbady'
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}

                    >
                        <Meta
                            avatar={<Avatar style={{ width: 50, height: 50 }} src={Php} />}
                            title="PHP (english)"
                        // description="90%"
                        />
                        <Progress percent={95} status="active" />
                    </Card>
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
                        // description="90%"
                        />
                        <Progress percent={90} status="active" />
                    </Card>

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
                        // description="70%"
                        />
                        <Progress percent={70} status="active" />
                    </Card>

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
                        // description="70%"
                        />
                        <Progress percent={70} status="active" />
                    </Card>

                    <Card
                        className='cardbady'
                        style={{
                            width: 300,
                            marginTop: 16,
                        }}

                    >
                        <Meta
                            avatar={<Avatar style={{ width: 50, height: 50 }} src={GH} />}
                            title="GitHub"
                        // description="90%"
                        />
                        <Progress percent={90} status="active" />
                    </Card>

                    <Divider className='mt-4' />
                    <Text type="light" className='d-flex justify-content-center textant'>Design</Text>
                    {/* <Divider /> */}

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
                        // description="90%"
                        />
                        <Progress percent={95} status="active" />
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
                        // description="90%"
                        />
                        <Progress percent={90} status="active" />
                    </Card>

                    <Divider className='mt-4' />
                    <Text type="light" className='d-flex justify-content-center textant'>Transverse</Text>
                    {/* <Divider /> */}
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
                        // description="99%"
                        />
                        <Progress percent={100} />
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Skills