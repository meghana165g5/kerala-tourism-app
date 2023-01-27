import {Box,Button,ImageListItem} from '@mui/material'
import { useState } from 'react'
import {ArrowCircleLeft, ArrowCircleRight} from '@mui/icons-material';

export default function ImageCarousel() {
    const images = [
        {
            id: 1,
            title:'image-one',
            url: 'https://www.financialexpress.com/wp-content/uploads/2021/09/Kerala-Tourism.jpg'
        },
        {
            id: 2,
            title: 'image-two',
            url: 'https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg='
        },
        {
            id: 3,
            title: 'image-three',
            url: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fa0d508c8-9008-11ec-8038-2fedb801d1cc.jpg?crop=4272%2C2848%2C0%2C0'
        },
        {
            id: 4,
            title: 'image-four',
            url: 'http://www.onamfestival.org/assets/images/onam-festival.jpg'
        }
    ]
    const [current,setCurrent] = useState(0);
    const prevSlide = () => 
        setCurrent(current === images.length-1 ? 0 : current+1)
    const nextSlide = () => 
        setCurrent(current === 0 ? images.length-1 : current-1)
    return(
        <Box style={{display:'flex',marginTop:'50px'}}>
            <Button onClick={prevSlide}><ArrowCircleLeft /></Button>
              {
                images.map((image,index) => {
                    return ((current === index) &&
                            <ImageListItem key={image.id} style = {{width:'100%', height:'450px', overflow:"hidden"}}>
                                <img src={image.url} alt={image.title} />
                            </ImageListItem>)
                })
              }  
            <Button onClick={nextSlide}><ArrowCircleRight /></Button>
        </Box>
    )
}