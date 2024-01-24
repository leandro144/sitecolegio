import { Box, Flex, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import React, { useRef, useEffect, useState } from 'react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [links] = useState([
    { id: 'body', label: 'Home' },
    { id: 'sobre-nos', label: 'Sobre nós' },
    { id: 'estrutura', label: 'Estrutura' },
    { id: 'seguimentos', label: 'Seguimentos' },
    { id: 'atividades', label: 'Atividades' },
    { id: 'informativos', label: 'Informativos' },
    { id: 'contato', label: 'Contato' },
  ]);

  const refs = useRef(links.reduce((acc, { id }) => {
    acc[id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    // Adiciona os refs ao estado
    refs.current = links.reduce((acc, { id }) => {
      acc[id] = React.createRef();
      return acc;
    }, {});
  }, [links]);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: 'smooth',
    });
  };

  return (
    <Box as='header' position='fixed' top='0' left='0' right='0' zIndex='999' bgColor='white'>
      <Flex justifyContent='space-between' alignItems='center' margin='0 auto' padding='.625rem 0' maxW='1150px' w='100%'>
        <Box>
          <Image w='100px' h='45px' src='/assets/logo.png' alt='logo-DB' />
        </Box>
        <Flex gap={8} alignItems='center' display={{ base: 'none', md: 'flex' }}>
          {links.map(({ id, label }) => (
            <Box key={label} cursor='pointer'>
              <ScrollLink to={id} smooth={true} duration={500} spy={true} exact='true' offset={-80} cursor='pointer'>
                {label}
              </ScrollLink>
            </Box>
          ))}
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
                  {links.map(({ id, label }) => (
                    <Box key={label} onClick={() => { scrollToRef(refs.current[id]); onClose(); }} cursor='pointer'>
                      {label}
                    </Box>
                  ))}
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
