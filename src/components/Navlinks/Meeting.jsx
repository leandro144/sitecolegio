import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Meeting = ({title}) => {
  return (
    <>
        <Box>
          <Heading fontSize={'1.2rem'}>Em breve mais informações: {title}</Heading>
        </Box>
    </>
  )
}

export default Meeting