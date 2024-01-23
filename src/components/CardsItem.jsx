import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Btn from './Btn'

const CardsItem = ({title, subtitle, description, image}) => {

  return (
    <> 
        <Flex border={'2px solid'}  data-aos="flip-left" color={'#fff'} borderRadius={'12px'} w={{ base: '80%', md: '50%', lg:'30%' }} p={6} flexDir={'column'} gap={4} justifyContent={'center'}>
            <Image src={image} alt='cards' w={'100%'} h={'30vh'} />
            <Text as={'h2'} fontSize={'1.5rem'} textAlign={'center'}>{title}</Text>
            <Text as={'h2'} fontSize={'1rem'} textAlign={'center'}>{subtitle}</Text>
            <Text as={'p'} textAlign={'justify'} fontSize={'1rem'} color={'#fff'}>{description}</Text>
            <Box m={'0 auto'}>
                <Btn title={'Saiba mais'} />
            </Box>
        </Flex>
    </>
  )
}

export default CardsItem