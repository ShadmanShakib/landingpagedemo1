import React from 'react';
import {Box, Text, Flex,Image, SimpleGrid} from '@chakra-ui/react'

const PricingCard=(props:any)=>{
    return(
        <Box
        w={[72]} 
        bgColor='gray.100'
        p='20px'
        rounded='sm'
        shadow='md'
        transition='all 0.4s ease'
        _hover={{transform:'translateY(-10px)'}}
        
        >
          <Flex justify='center' align='center' flexDirection='column'>
              <Image h='40px' src='/Images/Standard.svg'/>
              <Text
              textColor='#ff2c9c'
              fontWeight='bold'
              fontSize='xl'
              >{props.name}</Text>
              <Text
              fontSize={['xl','5xl']}
               fontWeight='bold'
              >${props.price}</Text> 
              </Flex>
         

          <Text
          
          textAlign='start'
          fontSize='xl'
          fontWeight={['normal']}
          pb='6px'
          > Feature one</Text>
          <Text
          textColor='gray.700'
          textAlign='start'
          fontSize='xl'
          fontWeight={['normal']}
          pb='6px'
          > Feature two</Text>
          <Text
          textColor='gray.700'
          textAlign='start'
          fontSize='xl'
          fontWeight={['normal']}
          pb='6px'
          >Feature three</Text>
          <Text
          textColor='gray.700'
          textAlign='start'
          fontSize='xl'
          fontWeight={['normal']}
          pb='6px'
          >Feature four</Text>
          <Text
          textColor='gray.700'
          textAlign='start'
          fontSize='xl'
          fontWeight={['normal']}
          pb='6px'
          >Feature five</Text>
          <Flex
          justify='center'
          mb='40px'
          mt='20px'
          >
          <Box
          w={[32]}
          border='2px solid'
          borderColor='purple.500'
          py='2'
          px='3'
          _hover={{bgColor:'purple.500', textColor:'white'}}
          >
              <Text
              textAlign='center'
              >Try it now</Text>
          </Box>
          </Flex>
        </Box>
    )
        
}

function Pricing() {
    return (
        <Box py='100px'>
           <Flex justify='center'> <SimpleGrid columns={[1,1,1,3]}
            justifyContent='center'
            spacing='40px'
            >
            <PricingCard price='59' name='Standard'/>
            <PricingCard price='59' name='Standard'/>
            <PricingCard price='59' name='Standard'/>
            </SimpleGrid>
            </Flex>
          
        </Box>
    )
}

export default Pricing
