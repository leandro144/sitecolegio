import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Titles = ({ title }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
    >
      <Text
        as="h1"
        color="#F9BE00"
        fontSize={{ base: '2rem', sm: '2.5rem', md: '3rem' }}
        fontWeight="700"
        letterSpacing="1px"
        my={4}
        textAlign="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: '100%',
          left: '0',
          width: { base: '100%', sm: '80%', md: '70%' },
          height: '2px',
          background: '#FFF',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: '100%',
          right: '0',
          width: { base: '80%', md: '70%', lg: '50%' },
          height: '2px',
          background: '#FFF',
        }}
      >
        {title}
      </Text>
      <Box
        as="span"
        display="inline-block"
        width="35px"
        height="12px"
        borderRadius="50%"
        backgroundColor="#F9BE00"
        position="absolute"
        top="100%"
        transform="translateY(-50%)"
        marginLeft="8px"
      />
    </Flex>
  );
};

export default Titles;
