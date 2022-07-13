import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import App1 from '../img/portfolio/app1.png'
import App2 from '../img/portfolio/lc.png'
import { Divider, Typography } from 'antd';
import Chip from '@mui/material/Chip';
const { Text } = Typography;

export default function MultiActionAreaCard() {
    return (
        <div className='container'>
            <Text type="light" className='d-flex justify-content-center textant'>Desarrollo Web</Text>

            <Divider />
            <div className='row'>
                <div className='d-flex'>
                    <div className='col mt-4 d-flex justify-content-center'>
                        <Card className='cardbady2' sx={{ maxWidth: 300 }} elevation={8}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={App1}
                                    alt="App"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        BrocoLand
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        An App to organize your accounts from different applications, investments and personal debts.
                                        Developed with the following technologies:
                                    </Typography>
                                    <Chip variant="outlined" label="PHP" color="success" size="small" />
                                    <Chip variant="outlined" label="BOOTSTRAP" color="secondary" size="small" />
                                    <Chip variant="outlined" label="JS" color="warning" size="small" />
                                    <Chip variant="outlined" label="MYSQL" color="info" size="small" />

                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                    <Button size="small" color="primary" variant='outlined' href="http://brocoland.zya.me/">
                                        DEMO
                                    </Button>
                                
                            </CardActions>
                        </Card>
                    </div>
                    <div className='col mt-4 d-flex justify-content-center'>
                    <Card className='cardbady2' sx={{ maxWidth: 300 }} elevation={8}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={App2}
                                    alt="App"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        BrocoLand
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        An App to organize your accounts from different applications, investments and personal debts.
                                        Developed with the following technologies:
                                    </Typography>
                                    <Chip variant="outlined" label="PHP" color="success" size="small" />
                                    <Chip variant="outlined" label="BOOTSTRAP" color="secondary" size="small" />
                                    <Chip variant="outlined" label="JS" color="warning" size="small" />
                                    <Chip variant="outlined" label="MYSQL" color="info" size="small" />

                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                    <Button size="small" color="primary" variant='outlined' href="https://lacolmenamx.netlify.app/">
                                        DEMO
                                    </Button>
                                
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
}
