import React from 'react';
import {Flex, Box, Text, SimpleGrid, Image} from '@chakra-ui/react';


const Card =(props)=>{
    return(
        <Box
        h={[60,]}
        w={[72]}
        mx={[2]}
        p={['15px']}
        shadow='md'
        bgColor='white'
        pos='relative'
        rounded='sm'
      transition='all 0.5s ease'
        _hover={{transform:'translateY(-10px)', shadow:'xl' }}
        className='section3box1'
        >
            <Flex pos='relative'  flexDirection='column'>
            <Image h={['60px']} w='60px'  src='/Images/Roket.svg' />
            <Text
            fontSize='xl'
            py='8px'
            fontWeight='bold'
            >{props.text1}</Text>
            <Text

            >Take decisive action with the frontline intelligence.</Text>

            <Box
            border='2px solid' 
            borderColor='pink.500'
            py='1'
            w='20'
            transition='all 0.3s ease'
            _hover={{textColor:'white', bgColor:'purple.500', borderColor:'purple.500'}}
            >
                <Text
                textAlign='center'
                fontWeight='semibold'
                textColor='gray.800'
                >More</Text>
            </Box>
            </Flex>
            <Box
            pos='absolute'
            h='4px'
            bottom='0'
            left='50%'
            right='50%'
            bgColor='pink.500'
            className='section3box2'
            >

            </Box>
            </Box>
    )
}

function Section3() {
    return (
        <Box pos='relative' py='100px'  maxW='1600px' mx='auto'  bgColor='blue.50'>

        <Text
        py={['20px']}
        textAlign='center'
        >My awesome services</Text>
        <Text
        fontSize={['3xl','4xl','5xl','6xl']}
        fontWeight='bold'
        textAlign='center'
        pb='20px'
        >I can give the best facilites for you</Text>
       <Flex justify='center'>
        <SimpleGrid 
        spacingX={['20px']}
        spacingY={['20px']}
         columns={[1,1,2,4]}>
           <Card text1='Threat Intelligence'/>
           <Card text1='Security Validation'/>
           <Card  text1='Consulting Services'/>
           <Card text1='Managed Defense'/>
        </SimpleGrid>
        </Flex>
        </Box>
    )
}

export default Section3
