import { 
  Text,
  Box,
  Link
} from '@chakra-ui/react'

export default function Post({ id, author, title, subtitle, createdAt }) {
  return (
    <Box w='100%' bgColor='#939393'>
      <Box w='100%' bgColor='#696969' p='1'>
        <Text fontSize='md'>({author})
          <Link href={`/post/${id}`}>
            <Text decoration='underline' display='inline'>{title}</Text>
          </Link>
        </Text>
        <Box w='100%' bgColor='#797979' p='1' h='20px'>
          <Text mt='-3px'>{subtitle}</Text>
        </Box>
      </Box>
      
      <Box w='100%' bgColor='#797979' p='1' h='20px'>
        <Text mt='-3px'>Статья опубликована {createdAt}</Text>
      </Box>
    </Box>
  )
}