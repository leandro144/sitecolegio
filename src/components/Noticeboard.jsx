// components/Noticeboard.js
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Cardnotice from './Cardnotice';

const Noticeboard = () => {
  return (
    <>
      <Flex bg={'#00B2A6'} 
          py={8} 
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'wrap'}>
          <Cardnotice />
      </Flex>
    </>
  );
};

export default Noticeboard;
