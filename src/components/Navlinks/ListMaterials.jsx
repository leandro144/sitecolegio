import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ListMaterials = () => {
  const materials = [
    { title: 'Mini e Maternal', fileUrl: '/assets/MINI-E-MATERNAL.pdf', fileName: 'miniematernal.pdf' },
    { title: 'Jardim I', fileUrl: '/assets/MINI-E-MATERNAL.pdf', fileName: 'jardimI.pdf' },
    { title: 'Jardim II', fileUrl: '/assets/MINI-E-MATERNAL.pdf', fileName: 'jardimII.pdf' },
    { title: '1° ANO', fileUrl: '/assets/1°ANO.pdf', fileName: '1°ano.pdf' },
    { title: '2° ANO', fileUrl: '/assets/2°ANO.pdf', fileName: '2°ano.pdf' },
    { title: '3° ANO', fileUrl: '/assets/3°ANO.pdf', fileName: '3°ano.pdf' },
    { title: '4° ANO', fileUrl: '/assets/4°ANO.pdf', fileName: '4°ano.pdf' },
    { title: '5° ANO', fileUrl: '/assets/5°ANO.pdf', fileName: '5°ano.pdf' },
    { title: 'FUDAMENTAL II E ENSINO MÉDIO', fileUrl: '/assets/FUNDAMENTALII-E-ENSINO MÉDIO.pdf', fileName: 'FundIIeMédio.pdf' },
  ];

  return (
    <>
      <Box>
        <Heading>Lista de Materiais 2024</Heading>
        <Text as={'p'} py={4}>Clique e faça o download!!</Text>
        <Flex gap={8} py={4} flexWrap={'wrap'}>
          {materials.map((material, index) => (
            <Flex key={index} flexDir={'column'}>
              <Link as={'a'} href={material.fileUrl} download={material.fileName}>
                {material.title}
              </Link>
              <br />
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ListMaterials;
