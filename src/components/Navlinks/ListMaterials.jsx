import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ListMaterials = () => {
  const materials = [
    { title: 'Lista de Material Mini e Maternal', fileUrl: '/path/to/file1.pdf', fileName: 'file1.pdf' },
    { title: 'Lista de Material do Jardim', fileUrl: '/path/to/file2.pdf', fileName: 'file2.pdf' },
  ];

  return (
    <>
      <Box>
        <Heading>Lista de Materiais 2024</Heading>
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
