import { 
  Center,
  Text,
  Box,
} from '@chakra-ui/react'

export default function PageSubTitle({ title }) {
  return (
    <Box w='100%' bgColor='#989898' p='1'>
      <Center h='25px'>
        <Text fontSize='xs'>{title}</Text>
      </Center>
    </Box>
  )
}