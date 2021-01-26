import Head from 'next/head'
import Section2 from  '../Components/Section2'
import Header from '../Components/Header'
import Section1 from '../Components/Section1'
import Section3 from '../Components/Section3'
import Pricing from '../Components/Pricing'
import Footer from '../Components/Footer'
import {Box, Flex, Button, Text} from '@chakra-ui/react'
export default function Home() {
  return (
    <div>
  <Section1/>
  <Section2/>
  <Section3/>
  <Pricing/>
  <Footer/>
    </div>
  )
}
