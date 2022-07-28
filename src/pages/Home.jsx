import React, { useState}  from 'react'
import { Box } from '@mui/material';

import { HeroBanner, SearchExercise, Exercises } from '../components';

const Home = () => {

  const [ bodyPart, setBodyPart ] = useState('all');
  const [ exercises, setExercises ] = useState("");

  return (
    <Box>
      <HeroBanner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home