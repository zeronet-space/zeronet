import { 
  Text,
  Box,
} from '@chakra-ui/react'

export default function Post({ id, author, title, subtitle, content, createdAt, updatedAt }) {
  return (
    <Box w='100%' bgColor='#939393'>
      <Box w='100%' bgColor='#696969' p='1'>
        <Text fontSize='md'>({author}) {title}
          <Text fontSize='xs' float='right' mt='3px'>id: {id}</Text>
        </Text>
        <Box w='100%' bgColor='#797979' p='1' h='20px'>
          <Text mt='-3px'>{subtitle}</Text>
        </Box>
        <Box w='100%' p='2'>
          <Text fontSize='md'>{content}</Text>
        </Box>
      </Box>
      <Box w='100%' bgColor='#797979' p='1' h='20px'>
        <Text mt='-3px'>Статья опубликована {createdAt}</Text>
      </Box>
      <Box w='100%' bgColor='#797979' p='1' h='20px'>
        <Text mt='-3px'>Последнее изменение {updatedAt}</Text>
      </Box>
    </Box>
  )
}