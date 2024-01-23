import { Flex, Box, Link, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as='header' position='fixed' top='0' left='0' right='0' zIndex='999' bgColor='white'>
      <Flex justifyContent='space-between' alignItems='center' margin='0 auto' padding='.625rem 0' maxW='1150px' w='100%'>
        <Box>
          <Image w='98px' h='45px' src='/assets/logo.png' alt='logo-DB' />
        </Box>
        <Flex gap={8} alignItems='center' display={{ base: 'none', md: 'flex' }}>
          <Link bg='#F9BE00' p={4} href='/'>
            Home
          </Link>
          <Link href='/'>Sobre nós</Link>
          <Link href='/'>Segmentos</Link>
          <Link href='/'>Atividades</Link>
          <Link href='/'>Informativos</Link>
          <Link href='/'>Depoimentos</Link>
          <Link href='/'>Contato</Link>
          <Link href='/'>Blog</Link>
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
          <HamburgerIcon fontSize='1.5rem' onClick={onOpen} />
        </Box>
        <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
              <DrawerBody>
                <Flex flexDir='column' gap={4}>
                  <Link href='/'>Home</Link>
                  <Link href='/'>Sobre nós</Link>
                  <Link href='/'>Segmentos</Link>
                  <Link href='/'>Atividades</Link>
                  <Link href='/'>Informativos</Link>
                  <Link href='/'>Depoimentos</Link>
                  <Link href='/'>Contato</Link>
                  <Link href='/'>Blog</Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;
