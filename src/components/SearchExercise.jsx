import React, { useEffect, useState } from 'react';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

import { HorizontalScrollbar } from '.';

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {

  const [ search, setSearch ] = useState("");
  const [ bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      setBodyParts(['all', ...bodyPartsData]);

    };

    fetchExercisesData();

  }, []);

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (exe) => exe.name.toLowerCase().includes(search)
        || exe.target.toLowerCase().includes(search)
        || exe.equipment.toLowerCase().includes(search)
        || exe.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);

    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={800}
                  sx={{ fontSize: { lg:'44px', xs:'30px'}}}
                  mb="50px" textAlign="center"
      >
        Awesome Exercise You <br/> Should Know
      </Typography>
      <Box position="relative" mb="72px">
      <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
      <Button className="search-btn" sx={{ bgcolor: '#001d3d', color:'#fff', textTransform:"none",  width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
        Search
      </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts  bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercise