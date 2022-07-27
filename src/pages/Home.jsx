import React, { useState}  from 'react'
import { Box } from '@mui/material';

import { HeroBanner, SearchExercise, Exercises } from '../components';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  )
}

export default Home