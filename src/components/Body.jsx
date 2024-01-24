import { Box, Image, Text, Flex, Button, useBreakpointValue, Link, Heading, Divider } from '@chakra-ui/react';
import Cards from './Cards';
import CardsItem from './CardsItem';
import Titles from './Titles';
import Doc from './Navlinks/Doc';
import { useState } from 'react';
import Hour from './Navlinks/Hour';
import Menu from './Navlinks/Menu';
import Meeting from './Navlinks/Meeting';
import ListMaterials from './Navlinks/ListMaterials';
import Content from './Navlinks/Content';

const Main = () => {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const justifyContent = useBreakpointValue({ base: 'center', md: 'flex-start' });

  const [show, setShow] = useState(false)
  const [showhour, setHour] = useState(false)
  const [menu, setMenu] = useState(false)
  const [meeting, setMeeting] = useState(false)
  const [list, setList] = useState(false)
  const [content, setContent] = useState(false)

  const handleDoc = () => setShow(!show);
  const handleHour = () => setHour(!showhour);
  const handleMenu = () => setMenu(!menu);
  const handleMeeting = () => setMeeting(!meeting);
  const handleList = () => setList(!list);
  const handleContent = () => setContent(!content);

  return (
    <>
      <Box id='body'>
        <Image src='../assets/banner.jpeg' alt='banner' w={'100%'} h={{base: '40vh', md: '80vh', lg: '97vh'}} pt={'64px'} />
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center' bg={'#005B72'} w={'100%'} py={8}>
        <Text as='span' color='#fff' fontSize={'2.5rem'} fontWeight={'700'} letterSpacing={'1px'}>
          BEM VINDO AO{' '}
          <Text as='span' color='#F9BE00'>
            DOM BOSCO
          </Text>
        </Text>
        <Flex
          maxW={'1150px'}
          m={'0 auto'}
          w={'100%'}
          gap={10}
          alignItems={'center'}
          flexDirection={flexDirection}
          justifyContent={justifyContent}
        >
          <Box id='sobre-nos'>
            <Cards
              title={'Sobre Nós'}
              description={'O Colégio Dom Bosco Vila Matilde oferece um método moderno e flexível para o desenvolvimento dos alunos. Aqui, a educação vai além dos livros. Ela ensina valores com seriedade, competência, consciência e dedicação.'}
            />
          </Box>
          <Box>
            <Cards
              title={'Proposta Pedagógica'}
              description={'A proposta pedagógica inovadora do Colégio Dom Bosco Vila Matilde fundamenta-se em três perspectivas teórico-metodológicas: interacionismo, interdisciplinaridade, pensamento complexo e inovação.'}
            />
          </Box>
          <Box>
            <Cards
              title={'Bilíngue'}
              description={`
              O Programa Bilíngue do Colégio Dom Bosco Vila Matilde oferece uma experiência abrangente para desenvolver habilidades linguísticas e compreensão cultural. Com um currículo inovador.`}
            />
          </Box>
        </Flex>
        <Flex mt={12} textAlign="center" flexDir={'column'}>
          <Box
            id='estrutura'
            as="span"
            display="inline-block"
            fontSize="5rem"
            mb={2}
            color={'#fff'}
            css={{
              '@keyframes rotate': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },
              animation: 'rotate 4s infinite linear',
            }}
          >
            🌐
          </Box>
          <Button
            colorScheme="yellow"
            variant="outline"
            size="lg"
            onClick={() => window.open('https://360vila.com.br/colegio/domboscovmatilde.html', '_blank')}
          >
            Conheça nossa estrutura 360°
          </Button>
        </Flex>
        <Titles title={'SEGMENTOS'} />
        <Flex id='seguimentos' maxW={'1150px'} my={12} gap={12} flexWrap={'wrap'} justifyContent={'center'}>
          <CardsItem image={'/assets/card1.jpg'} title={'EDUCAÇÃO INFANTIL'} description={'Desenvolver, envolver, ensinar: Para quem está começando a aprender praticamente tudo, uma proposta pedagógica que incentiva o brincar.'} />
          <CardsItem image={'/assets/card2.jpg'} title={'FUNDAMENTAL'} description={'Autonomia, reflexão e descobertas: Um momento fundamental para desenvolver o conhecimento e, ao mesmo tempo, descobrir um mundo de coisas nova.'} />
          <CardsItem image={'/assets/card3.jpg'} title={'ENSINO MÉDIO'} description={'A flexibilidade que sua escola precisa para preparar seus alunos do jeito certo. A proposta do material do Ensino Médio está de acordo com o encaminhamento do ENEM e os principais vestibulares do Brasil.'} />
          <CardsItem image={'/assets/card4.jpg'} title={'PRÉ-VESTIBULAR'} description={'As aulas são ministradas por professores qualificados e treinados para que nossos alunos possam assimilar o que foi transmitido em sala.'} />
          <CardsItem image={'/assets/card5.jpg'} title={'CAPACITAÇÃO PROFISSIONAL EAD'} description={'Cursos de curta duração à distânciaVia Plataforma de Ensino Preços acessíveis Qualificação para o mercado de trabalho'} />
        </Flex>
          <Titles title={'ATIVIDADES'} />
          <Flex id='atividades' maxW={'1150px'} my={12} gap={12} flexWrap={'wrap'} justifyContent={'center'}>
            <CardsItem image={'/assets/card6.jpg'} title={'6° ANO A'} subtitle={'Professora Priscila Tomasini'} description={'Usando a tecnologia. Pesquisamos sobre a história do sobrenome, apelido ou nome de família, a porção do nome do indivíduo que está relacionada com a sua ascendência. E, descobrimos que está intimamente ligado ao estudo genealógico.'} />
            <CardsItem image={'/assets/card7.jpg'} title={'ALUNOS DO 2° EM.'} subtitle={'Biologia/ Prof. Priscila Lima.'} description={'Objetivo desenvolver a coordenação, a criatividade, concentração, controlar a ansiedade, desenvolvendo também a socialização e aprender as estruturas anatômicas do aparelho digestivo.'} />
            <CardsItem image={'/assets/card8.jpg'} title={'PROJETO MAKER'} subtitle={'-'} description={'aprenderam e criaram a sua primeira história em quadrinho. Cada aluno apresentou a sua história em quadrinho para a classe                            .'} />
            <CardsItem image={'/assets/card9.jpg'} title={'5° ANO (Fund I )'} subtitle={'Profª Mônica'} description={'Foi uma tarde muito bela. As crianças levaram lembrancinhas aos idosos, que gentilmente agradeceram... Essa troca de experiências não se apagará em nossos corações, pois gentileza....gera gentileza!'} />
          </Flex>
          <Titles title={'INFORMATIVOS'} />
          <Flex id='informativos' maxW={'1150px'} my={12} gap={12} flexWrap={'wrap'} justifyContent={'start'} color={'#fff'}>
              <Link onClick={handleDoc}>Documentação</Link>
              <Link onClick={handleHour}>Horários</Link>
              <Link onClick={handleMenu}>Cardápios</Link>
              <Link onClick={handleMeeting}>Reuniões</Link>
              <Link onClick={handleList}>Listas de Materiais</Link>
              <Link>Cronogramas</Link>
              <Link onClick={handleContent}>Conteúdo de Provas</Link>
              <Divider position={'relative'} top={'-30px'} />
              <Box position={'relative'} top={'-40px'}>
                {show && <Doc />}
                {showhour && <Hour />}
                {menu && <Menu />}
                {meeting && <Meeting />}
                {list && <ListMaterials />}
                {content && <Content />}
              </Box>  
          </Flex>
      </Box>
    </>
  );
};

export default Main;
