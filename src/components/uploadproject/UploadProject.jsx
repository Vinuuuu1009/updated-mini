import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';


  export default function uploadproject() {
    return (
     
        <Flex mt='10'
        h='120vh'
        
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={['2xl','2xl','3xl','4xl']} color={useColorModeValue('green.500','teal.200')}>Upload Your Project</Heading>
              <Text fontSize={'90px'} color={'gray.600'}>
                
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={2} >
                <FormControl id="projectname">
                  <FormLabel>Project Name</FormLabel>
                  <Input type="projectname" ></Input>
                </FormControl>
                <FormControl id="author">
                  <FormLabel>Author Name</FormLabel>
                  <Input type="author" />
                </FormControl>
                <FormControl id="techused">
                  <FormLabel>Technology Used</FormLabel>
                  <Input type="techused" />
                  </FormControl>
                  <FormControl id="description">
                  <FormLabel>Project Description</FormLabel>
                  <Input type="description" />
                </FormControl>
                <FormControl id="upload">
                  <FormLabel>Upload File</FormLabel>
                  <Input type="uppload" />
                </FormControl>
                <Stack spacing={8}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {/* <Checkbox>Remember me</Checkbox> */}
                  </Stack>
                  <Button 
                  colorScheme={useColorModeValue('green','teal')}
                  >
                  Upload
                  
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  
               

                  
                

             
            
      