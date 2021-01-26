import React from 'react';
import {Flex, Box, Text} from '@chakra-ui/react'

function Section3() {
    return (
        <Box
        h={[56,]}
        w={[56]}
        mx={[2]}
        shadow='md'
        pos='relative'
      transition='all 0.3s ease'
        _hover={{bgColor:'pink.600',transform:'translateY(-10px)', shadow:'xl' }}
        className='section3box1'
        >
            <Box
            pos='absolute'
            h='2'
            bottom='0'
            left='50%'
            right='50%'
            bgColor='red.800'
            className='section3box2'
            >

            </Box>

        </Box>
    )
}

export default Section3
