import { 
  Center,
  Text,
  Box,
} from '@chakra-ui/react'

export default function PageTitle({ title }) {
  return (
    <Box w='100%'>
      <Center bg='#999999b6' h='25px'>
        <Text fontSize='md'>{title}</Text>
      </Center>
    </Box>
  )
}