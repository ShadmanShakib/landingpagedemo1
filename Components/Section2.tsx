import React from 'react';
import Icon4 from './icons/icon4'
import {Box, Flex, Text, Image} from '@chakra-ui/react'
import Security from './icons/Security';

function Section2() {
    return (
        <Box maxW='1600px' mx='auto'>

            {/* part1 */}
            <Flex
            flexDirection={['column','column' ,'row']}
            mx={['20px']}
            py={['100px']}
            >
         <Image  alt='image' height='auto' width='auto' src="/Images/ab2.png"/>
         <Flex 
         flexDirection={['column']} justifyContent='center'
         align='start'
         ml={[,,,'40px']}
         >
           <Flex 
           justifyContent='center'
           align='center'
            h='120px' bgColor='purple.500' rounded='full' w='120px'>
                <Icon4 height='100px' width='100px' fill="white"/></Flex> 
            <Text
            py='20px'
            fontSize={['3xl']}
            fontWeight={['bold']}
            >Workflow that works for your benefit</Text>
            <Text
            fontSize={[,,,'lg']}
            w={[,,,'600px']}
            >Give your team the ability to quickly create, send, and track docs within and approval system that works for everyone. And will be very easy to wrok with the app called the name.</Text>
            </Flex>
            </Flex>


            {/* Part2 */}
            <Flex
            flexDirection={['column','column', 'row']}
            mx={['20px']}
            pb={['100px']}
            >
                <Flex 
         flexDirection={['column']} justifyContent='center'
         align='start'
         mr={[,,,'40px']}
         >
           <Flex 
           justifyContent='center'
           align='center'
            h='120px' bgColor='purple.500' rounded='full' w='120px'>
                <Security height='100px' width='100px' fill="white"/></Flex> 
            <Text
            py='20px'
            fontSize={['3xl']}
            fontWeight={['bold']}
            >Workflow that works for your benefit</Text>
            <Text
            fontSize={[,,,'lg']}
            w={[,,,'600px']}
            >Give your team the ability to quickly create, send, and track docs within and approval system that works for everyone. And will be very easy to wrok with the app called the name.</Text>
            </Flex>
           <Image alt="image2" height='auto' width='auto' src='/Images/ab1.png'/>
          </Flex>
        </Box>
    )
}

export default Section2
