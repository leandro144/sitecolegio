import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Hour = () => {
  return (
    <>
        <Box>
            <Heading>Horários de aula</Heading>
            <Flex gap={8} py={4}>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Matutino</Text>
                    <Text>➔ Ed. Infantil e Fundamental I horário: 7h20min às 11h50min</Text>
                    <Text>➔ Fundamental II horário: 7h às 11h50min</Text>
                    <Text>➔ Ensino Médio horário: 7h às 12h35min</Text>
                    <br></br>
                </Box>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Vespertino</Text>
                    <Text>➔ Ed. Infantil e Fundamental I horário: 13h20min às 17h50min</Text>
                </Box>
            </Flex>
            <Heading>Grade de Aulas</Heading>
            <Flex gap={8} py={4} flexWrap={'wrap'}>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Maternal</Text>
                    <Text>Maternal I - Manhã</Text>
                    <Text>Maternal I - Tarde</Text>
                    <Text>Maternal II - Manhã</Text>
                    <Text>Maternal II - Tarde</Text>
                    <br></br>
                </Box>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Jardim</Text>
                    <Text>Jardim I - Manhã</Text>
                    <Text>Jardim I - Tarde</Text>
                    <Text>Jardim II - Manhã</Text>
                    <Text>Jardim II - Tarde</Text>
                </Box>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Fundamental I</Text>
                    <Text>1º Ano - Manhã</Text>
                    <Text>1º Ano - Tarde</Text>
                    <Text>2° Ano - Manhã</Text>
                    <Text>2° Ano - Tarde</Text>
                    <Text>3° Ano - Manhã</Text>
                    <Text>3° Ano - Tarde</Text>
                    <Text>4° Ano - Manhã</Text>
                    <Text>4° Ano - Tarde</Text>
                    <Text>5° Ano - Manhã</Text>
                    <Text>5° Ano - Tarde</Text>
                </Box>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Fundamental II e Ensino Médio</Text>
                    <Text>Fundamental II</Text>
                    <Text>Ensino Médio</Text>
                </Box>
                <Box>
                    <Text as={'p'} fontWeight={'bold'} >Tabela de Aulas</Text>
                    <Text>1° Ano A</Text>
                    <Text>2° Ano A</Text>
                    <Text>3° Ano A</Text>
                    <Text>6° Ano</Text>
                    <Text>7° Ano</Text>
                    <Text>8° Ano</Text>
                    <Text>9° Ano</Text>
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default Hour