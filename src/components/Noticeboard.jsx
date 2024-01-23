// components/Noticeboard.js
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Titles from './Titles';
import Cardnotice from './Cardnotice';

const Noticeboard = () => {
  return (
    <>
      <Box bg={'#00B2A6'} py={8} margin={'0 auto'} textAlign="center">
        <Flex maxW={'1150px'} margin={'0 auto'} justifyContent={'center'} flexWrap={'wrap'} py={8}>
          <Cardnotice />
        </Flex>
      </Box>
    </>
  );
};

export default Noticeboard;
