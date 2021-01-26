import React from 'react';
import Security from './icons/Security'
import Icon4 from './icons/icon4'
import styles from '../styles/Home.module.css'
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react'
import Fingerprient from './icons/Fingerprient';

function section1() {
    return (
        <Box maxW='1600px' mx='auto' bgImage='url(Images/b1.jpg)' >

            {/* Logo and menu button */}
            <Flex 
            py={['8']}
            pl={[2]}
            align='center' justifyContent='space-between'>
            <Text 
            textColor='white'
            fontSize={['2xl']}
            >Sadman Shakib</Text>
            <Box
            mr={[5]}
            >
                <Box w='7' h='1' bgColor='white' opacity='0.4'></Box>
                <Box w='7' h='1' bgColor='white' opacity='0.4' my='1'></Box>
                <Box w='7' h='1' bgColor='white' opacity='0.4'></Box>
            </Box>
            </Flex>

            <Box 
            px={[2]}
            py={['40px']}
            >
                <Text
                textColor='white'
                fontSize={['4xl']}
                >Land Page Demo created by Shadman Shakib</Text>
                <Text
                textColor='white'
                mt={[5]}
                >Even in the most uncertain times, Help Scout keeps you connected with customers.</Text>
            </Box>
            <Box 

            bgColor=' #FF2C9C'
            textColor='white'
            fontWeight='semibold'
            rounded='sm'
            h={['auto']}
            py={[3]}
            ml={[2]}
            w={[40]}
            _hover={{bgColor:'purple.500'}}
            >
                <Text
                px={['5']}
                >More about me </Text>
            </Box>
            <SimpleGrid pb='100px' columns={[1,1,2,4]}>
                {/* Card 1 */}
                <Flex
                bgColor='white'
                p={['20px']}
                h={['120px']}
                flexDirection='column'
                justifyContent='center'
                align='center'
                transition='all 0.5s ease'
                rounded='sm'
                _hover={{bgColor:'purple.800', h:'105px' 
            
            }}
                mx={['10px']}
                mt={['40px']}
                className={styles.section1card1}
                > 
               <Security  fill='#ff2c9c'/>
                <Text
                className={styles.cardtext1}
                fontWeight='bold'
                >Network Security</Text> 
                </Flex>
                {/* Card2 */}
                <Flex
                bgColor='white'
                p={['20px']}
                h={['120px']}
                flexDirection='column'
                justifyContent='center'
                align='center'
                transition='all 0.5s ease'
                rounded='sm'
                _hover={{bgColor:'purple.800', h:'105px' 
            
            }}
                mx={['10px']}
                mt={['40px']}
                className={styles.section1card2}
                > 
               <Security  fill='#ff2c9c'/>
                <Text
                className={styles.cardtext2}
                fontWeight='bold'
                >Network Security</Text> 
                </Flex>
                {/* Card 3 */}
                <Flex
                bgColor='white'
                p={['20px']}
                h={['120px']}
                flexDirection='column'
                justifyContent='center'
                align='center'
                transition='all 0.5s ease'
                rounded='sm'
                _hover={{bgColor:'purple.800', h:'105px' 
            
            }}
                mx={['10px']}
                mt={['40px']}
                className={styles.section1card3}
                > 
               <Fingerprient  fill='#ff2c9c'/>
                <Text
                className={styles.cardtext3}
                fontWeight='bold'
                >Security Consult</Text> 
                </Flex>


                {/* Card4*/}
                <Flex
                bgColor='white'
                p={['20px']}
                h={['120px']}
                flexDirection='column'
                justifyContent='center'
                align='center'
                transition='all 0.5s ease'
                rounded='sm'
                _hover={{bgColor:'purple.800', h:'105px' 
            
            }}
                mx={['10px']}
                mt={['40px']}
                className={styles.section1card4}
                > 
               <Security  fill='#ff2c9c'/>
                <Text
                className={styles.cardtext4}
                fontWeight='bold'
                >Email Securit</Text> 
                </Flex>
             
            </SimpleGrid>
          
        </Box >
    )
}

export default section1
