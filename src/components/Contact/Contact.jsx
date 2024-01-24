// components/ContactForm.js
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cellphone: '',
    interestClass: '',
    birthDate: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    cellphone: false,
    interestClass: false,
    birthDate: false,
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
      phone: !formData.phone,
      cellphone: !formData.cellphone,
      interestClass: !formData.interestClass,
      birthDate: !formData.birthDate,
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
    <Box color={'#052F55'} fontWeight={'700'}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isInvalid={formErrors.name}>
          <FormLabel>Nome</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.phone}>
          <FormLabel>Telefone</FormLabel>
          <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.cellphone}>
          <FormLabel>Celular</FormLabel>
          <Input type="tel" name="cellphone" value={formData.cellphone} onChange={handleChange} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.interestClass}>
          <FormLabel>Turma de Interesse</FormLabel>
          <Select name="interestClass" value={formData.interestClass} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="turma1">Infantil</option>
            <option value="turma2">Fundamental I</option>
            <option value="turma3">Fundamental II</option>
          </Select>
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.birthDate}>
          <FormLabel>Data de Nascimento</FormLabel>
          <Input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={formErrors.message}>
          <FormLabel>Mensagem</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
          <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
