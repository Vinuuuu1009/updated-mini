import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  
export default function ProfilePage() {
    return (
      
      <Flex mt='10'
      h='130vh' 
    //   width='90vh'
      
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
         <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
             <Heading fontSize={['2xl','2xl','3xl','4xl']} color={useColorModeValue('green.500','teal.200')}>Profile</Heading>
           
           </Stack> 
        
      
     
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={9}>
            <Stack spacing={2} >
            <Stack display={'flex'} align={'center'} spacing={2}>
             <Image src={'https://images.discordapp.net/avatars/417779193783255058/336d3c184c007f35e6200a6a13e508e4.png?size=512'} boxSize={'170px'} width ={'190px'} borderRadius={'xl'} mt='2' /></Stack>
            {/* <Image src={'https://images.discordapp.net/avatars/417779193783255058/336d3c184c007f35e6200a6a13e508e4.png?size=512' alt={'avatar'} boxSize={'200px'} borderRadius={'xl'} mt='2' /> */}
    
              <FormControl id="firstname">
                <FormLabel>First Name :</FormLabel>
                <Input type="firstname" ></Input>
              </FormControl>
              <FormControl id="lastname">
                <FormLabel>Last Name :</FormLabel>
                <Input type="lastname" />
              </FormControl>
              <FormControl id="college ">
                <FormLabel>College Name :</FormLabel>
                <Input type="college" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email-id :</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="contact">
                <FormLabel>Phone No :</FormLabel>
                <Input type="contact" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                </Stack>
                
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }