import Contacts from '@/components/Contact/Contacts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Titles from '@/components/Titles'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <>
       <Header /> 
       <Flex pt={'100px'} bg={'#005B72'} w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'center'} flexDir={'column'}> 
       <Titles title={'FALE CONOSCO'} />
          <Box maxW={'1150px'} w={'100%'} margin={'0 auto'} borderRadius={'12px'} p={8}>
            <Contacts />
          </Box> 
       </Flex>
       <Footer />
    </>  
  )
}

export default Contact