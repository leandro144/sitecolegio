import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { IoIosPeople } from 'react-icons/io';
import React from 'react';
import Btn from './Btn';

const Hexagon = ({ title, description }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop="4rem"
      w={'100%'}
      h={'65vh'}
      gap={4}
    >
      <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={8}>
        <Box
          w="8em"
          h="9.2em"
          pos="relative"
          transform="rotate(90deg)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          minHeight="9.2em"
        >
          <Box
            w="100%"
            h="100%"
            clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            pos="absolute"
            top="0"
            left="0"
            zIndex="-1"
            border="5px solid #F9BE00"
          />
          <Icon as={IoIosPeople} boxSize="3em" color="#FFF" transform="rotate(-90deg)" />
        </Box>

        <Flex
          flexDirection="column"
          textAlign="center"
          gap={4}
          alignItems="center"
          w="100%" 
        >
          <Text as="h2" color="#fff" fontSize="1.2rem" marginBottom="0.5rem">
            {title}
          </Text>
          <Text as="p" textAlign="justify" maxW="350px" fontSize="14px" color="#fff">
            {description}
          </Text>
        </Flex>
        <Btn title="Saiba Mais" />
      </Flex>
    </Flex>
  );
};

export default Hexagon;
