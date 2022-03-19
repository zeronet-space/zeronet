import { 
  Center,
  Text,
  Box,
} from '@chakra-ui/react'

export default function PageSubTitle({ title }) {
  return (
    <Box w='100%' bgColor='#989898' p='1' h='20px'>
      <Center h='25px' color='white'>
        <Text fontSize='xs' mt='-10px'>{title}</Text>
      </Center>
    </Box>
  )
}