// components/ContactForm.js
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    cellphone: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name,
      email: !formData.email,
      cellphone: !formData.cellphone,
      message: !formData.message,
    };

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Erro no Formulário',
        description: 'Por favor, preencha todos os campos corretamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Formulário Enviado!',
          description: 'Seus dados foram enviados com sucesso.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Erro no Formulário',
          description: data.error || 'Erro ao processar o formulário',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro no Formulário',
        description: 'Erro ao processar o formulário',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box color={'#fff'} fontWeight={'700'}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isInvalid={formErrors.name}>
          <FormLabel>Nome</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} bg={'#fff'} color={'#000'} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} bg={'#fff'} color={'#000'} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.cellphone}>
          <FormLabel>Celular</FormLabel>
          <Input type="tel" name="cellphone" value={formData.cellphone} onChange={handleChange} bg={'#fff'} color={'#000'} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.message}>
          <FormLabel>Mensagem</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} bg={'#fff'} color={'#000'} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <Button type="submit" bg={'#F9BE00'} color={'#fff'} w={'15%'}>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
