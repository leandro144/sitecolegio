import { Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import Titles from './Titles';

const Cardnotice = () => {
  const news = [
    {
      imageUrl: '/assets/info01.jpg',
      alt: 'Notícia 1',
    },
    {
      imageUrl: '/assets/info02.jpg',
      alt: 'Notícia 2',
    },
    {
        imageUrl: '/assets/info03.jpg',
        alt: 'Notícia 3',
    },
    {
        imageUrl: '/assets/info04.jpg',
        alt: 'Notícia 4',
    },
  ];

  return (
    <>
      <Titles title={'MURAL DE AVISOS'} />
      <Flex gap={8} py={10} justifyContent={'center'} flexWrap={'wrap'}>
        {news.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Flex align="center">
              <Image src={item.imageUrl} alt={item.alt} w="260px" h="260px" />
            </Flex>
          </motion.div>
        ))}
      </Flex>
    </>
  );
};

export default Cardnotice;
