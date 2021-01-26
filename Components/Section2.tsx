import React from 'react';
import Image  from 'next/image'
import Icon4 from './icons/icon4'
import {Box, Flex, Text} from '@chakra-ui/react'

function Section2() {
    return (
        <Box>
            <Flex
            flexDirection={['column', 'row']}
            >
         <Image className='' alt='image' height='auto' width='auto' src="/Images/ab2.png"/>
            <Icon4 height='100px' width='100px'/>
            <Text>Workflow that works for your benefit</Text>
            <Text
            >Give your team the ability to quickly create, send, and track docs within and approval system that works for everyone. And will be very easy to wrok with the app called the name.</Text>
            </Flex>
           <Image alt="image2" height='auto' width='auto' src='/Images/ab1.png'/>
          
        </Box>
    )
}

export default Section2
