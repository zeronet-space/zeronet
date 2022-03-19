import { 
  Container,
  Center,
  Text,
  Box,
  Image
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

export default function PageTitle({ title }) {
  return (
    <Box w='100%'>
      <Center bg='#999999b6' h='25px' color='white'>
        <Text fontSize='md'>{title}</Text>
      </Center>
    </Box>
  )
}