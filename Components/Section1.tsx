import React from 'react';
import Security from './icons/Security'
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react'

function section1() {
    return (
        <Box bgImage='url(Images/b1.jpg)' >

            {/* Logo and menu button */}
            <Flex align='center' justifyContent='space-between'>
            <Text 
            textColor='white'
            fontSize={['xl']}
            >Sadman Shakib</Text>
            <Box
            mr={['14px']}
            >
                <Box w='7' h='1' bgColor='white' opacity='0.4'></Box>
                <Box w='7' h='1' bgColor='white' opacity='0.4' my='1'></Box>
                <Box w='7' h='1' bgColor='white' opacity='0.4'></Box>
            </Box>
            </Flex>

            <Box py={['100px']}
            >
                <Text
                textColor='white'
                >Land Page Demo created by Shadman Shakib</Text>
                <Text
                textColor='white'
                >Even in the most uncertain times, Help Scout keeps you connected with customers.</Text>
            </Box>
            <Box 
            bgColor='pink.600'
            textColor='white'
            fontWeight='semibold'
            
            >
                <Text>More about me </Text>
            </Box>
            <SimpleGrid>
                <Flex>
                   
                    
                </Flex>
            </SimpleGrid>
            <Security height='100px' fill='white'/>
        </Box >
    )
}

export default section1
