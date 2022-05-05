import * as React from 'react';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import styles from "./HomeMenuDemoList.module.css"

const numberFormater = new Intl.NumberFormat('de-DE');

const iceCreamData = [
    {
        name: "Chocolate Orange Hazelnut",
        img: "/image/home/home-menu-demo/ice-cream/square-16.jpg",
        description: "Vani - Hạt dẻ",
        subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
        price: 29000
    },
    {
        name: "Pralines 'n Cream",
        img: "/image/home/home-menu-demo/ice-cream/square-17.jpg",
        description: "Vani - Hạt dẻ",
        subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
        price: 50000
    },
    {
        name: "Blueberry Pannacotta",
        img: "/image/home/home-menu-demo/ice-cream/square-18.jpg",
        description: "Vani - Hạt dẻ",
        subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
        price: 55000
    },
    {
        name: "Matcha 'n Cream",
        img: "/image/home/home-menu-demo/ice-cream/square-19.jpg",
        description: "Vani - Hạt dẻ",
        subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
        price: 39000
    }
  ]
  

const HomeMenuDemoList = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <p className={styles.content}>Hand made ice creams</p>
                    <h2 className={styles.title}>ICE CREAMS</h2>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {iceCreamData.map(i => (
                            <div key={i.name}>
                                <ListItem alignItems="flex-start" className={styles.list_item}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={i.img} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={i.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {i.description}
                                                </Typography>
                                                {i.subDescription}
                                            </React.Fragment>
                                        }
                                    />
                                    <ListItemText
                                        primary={`${numberFormater.format(i.price)}đ`}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </div>

                        ))}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <img src="/image/home/home-menu-demo/ice-cream/block-4.jpg" alt="ice-cream-home-menu" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomeMenuDemoList
