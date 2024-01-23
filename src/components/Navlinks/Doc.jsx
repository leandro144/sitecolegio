import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Doc = () => {
  return (
    <>
        <Box>
            <Heading>Documentações</Heading>
            <Text as={'p'} >Documentação necessária para a matrícula do aluno no colégio do ano letivo.</Text>
            <Text>➔ Cópia do RG , CPF de RESIDÊNCIA do Responsável Financeiro;</Text>
            <Text>➔ Cópia da Certidão de Nascimento do(a) aluno(a) e RG (se houver);</Text>
            <Text>➔ 2 Fotos 3 x 4;</Text>
            <Text>➔ Carteira de Vacinação (alunos Educação Infantil 1º Ano do Ensino Fundamental);</Text>
            <Text>➔ Atestado de transferência;</Text>
            <Text>➔ Histórico Escola até março de 2017.</Text>
            <Text>➔ CPF (para alunos do Ensino Médio)</Text>
            <Text>➔ Antes de efetuar a matrícula, é realizada uma entrevista com a família e o(a) aluno(a), para que possamos ter a oportunidade de nos conhecermos , bem como apresentar o nosso trabalho e os espaços físicos da Instituição.</Text>
        </Box>
    </>
  )
}

export default Doc