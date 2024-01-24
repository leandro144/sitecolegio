import { Box, Button, Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Titles from './Titles'

const Footer = () => {
  return (
    <>
        <Box bg={'#005B72'} py={8}>
            <Flex id='contato' maxW={'1150px'} margin={'0 auto'} justifyContent={'center'}>
                <Titles title={'CONTATO'} />
            </Flex>
            <Flex maxW={'1150px'} margin={'0 auto'} justifyContent={'center'} gap={8} textAlign={'center'} py={8} color={'#fff'}>
                <Flex flexDir={'column'} gap={4}>
                    <Text fontSize={'1.2rem'}>Matrículas 2024</Text>
                    <Link href='/matriculas' bg={'none'} color={'#fff'} border={'1px solid #F9BE00'} p={'.425rem 1rem'} cursor={'pointer'}>Clique aqui!</Link>
                </Flex>
                <Flex flexDir={'column'} gap={4}>
                    <Text fontSize={'1.2rem'}>Fale Conosco</Text>
                    <Link href='/contato' bg={'none'} color={'#fff'} border={'1px solid #F9BE00'} p={'.425rem 1rem'} cursor={'pointer'}>Clique aqui!</Link>
                </Flex>
            </Flex>
        </Box>
        <Box py={4}>
            <Heading fontSize={'1.2rem'} color={'#1D325A'} textAlign={'center'}>Dom Bosco Vila Matilde</Heading>
            <Divider borderColor="##1D325A" py={4} m={'0 auto'} maxW={{base: '250px', md: '500px', lg: '85%'}} />
            <Flex maxW={'1150px'} m={'0 auto'} justifyContent={'space-between'} alignItems={'center'} my={8} gap={12} flexDir={{base: 'column', lg: 'row'}}>
                <Flex flexDir={'column'} textAlign={'center'}>
                    <Text>R. Atuai, 691 - Vila Matilde</Text>
                    <Text>São Paulo - SP</Text>
                </Flex>
                <Flex>
                    <Text>Telefone: (11) 4327-7727</Text>
                </Flex>
                <Flex flexDir={'column'} textAlign={'center'}>
                    <Text>Acompanhe nas Redes Sociais!</Text>
                    <Flex justifyContent={'center'} gap={4}>
                        <Text>Facebook</Text>
                        <Text>Instagram</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
        <Flex justifyContent={'center'} py={4}>
            <Image src='/assets/logoatualmedio.png' alt='' />
        </Flex>
        <Box textAlign={'center'}>@Copyright 2024 || Desenvolvido por Leandro Castro.</Box>
    </>
  )
}

export default Footer