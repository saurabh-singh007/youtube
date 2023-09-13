import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {Videos,ChannelCard} from './'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import {Stack ,Box,Typography} from '@mui/material';


const ChannelDetails = () => {
  const {id}=useParams();
  const [channelDetail,setChannelDetails]=useState();
  const [videos,setVideos]=useState([]);
  useEffect(() => {
      FetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetails(data.items[0]),
      FetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data)=>setVideos(data.items))
      )   
  }, [id])
 return (
    <Stack>
      <Box sx={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',}}>
      <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box sx={{padding:"7rem"}}>
      <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default ChannelDetails