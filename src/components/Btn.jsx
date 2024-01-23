import { Box, Flex, Button } from '@chakra-ui/react'
import React from 'react'

const Btn = ({title}) => {
  return (
    <>
        <Flex>
          <Box marginTop="auto">
              <Button bg={'#FE7702'} color={'#fff'} py={'.625rem'} textAlign={'center'}>
                {title}
              </Button>
          </Box>
        </Flex>
    </>
  )
}

export default Btn