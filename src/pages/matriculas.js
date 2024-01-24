import ContactForm from '@/components/Contact/Contact'
import Header from '@/components/Header'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Enrollment = () => {
  return (
    <>
        <Header />
        <Flex pt={'100px'} textAlign={'center'} justifyContent={'center'} flexDir={'column'} alignItems={'center'}>
            <Heading color={'#008080'}>PROPOSTA PEDAGÓGICA</Heading>
            <Text as={'p'} w={'60%'}>O Sistema de Ensino Dom Bosco oferece um método moderno e flexível para sustentar o desenvolvimento das escolas parceiras e, principalmente, dos alunos. Aqui, a educação vai além dos livros. Ela ensina valores com seriedade, competência, consciência e dedicação.</Text>
            <Divider borderColor={'#000'} my={4} maxW={'1150px'} />
        </Flex>
        <Box bg={'#008080'} w={'100%'} py={8}>
            <Box maxW={'1150px'} margin={'0 auto'} bg={'#fff'} borderRadius={'12px'} p={8} >
                <ContactForm />
            </Box>
        </Box>
        
       
    </>
  )
}

export default Enrollment