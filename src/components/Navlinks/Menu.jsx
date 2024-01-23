import { Box, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Menu = () => {

  const fileUrl = '/arquivos/cardapio.pdf'
  const fileName = 'cardapio-2024.pdf'
  return (
    <>
        <Box>
            <Heading>Cárdapio</Heading>
            <Link 
            as={'a'} 
            href={fileUrl}
            download={fileName}
             >. Visualizar ou Baixar Cardápio
            </Link>
        </Box>
    </>
  )
}

export default Menu