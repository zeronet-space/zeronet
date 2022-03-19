import type { AppProps } from 'next/app'
import Head from 'next/head'

import React, { 
  ReactNode,
  useState, 
  useEffect,
  useLayoutEffect
} from 'react'
import { 
  ChakraProvider,
  Drawer,
  DrawerContent,
  Image,
  Container,
  Center,
  Box,
  Flex,
  IconButton,
  CloseButton,
  Spacer,
  Divider,
  Link,
  Text,
  BoxProps,
  FlexProps,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { ColorModeScript } from '@chakra-ui/react'
import useDimensions from "react-cool-dimensions"
import { ResizeObserver } from "@juggle/resize-observer"

import '../styles/globals.scss'
import theme from '../zeronet.theme'

const LinkItems = [
  { name: 'Главная', icon: 'fluent:home-12-filled', url: '/' },
  { name: 'Пастбин', icon: 'fluent:notebook-add-24-filled', url: '//paste.zeronet.space' },
];

function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <SidebarContent onClose={() => onClose} display={{ base: 'none' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Icon 
        height='24' 
        width='24' 
        icon='ep:menu' 
        onClick={onOpen} 
        cursor='pointer' 
        style={{
          marginTop: '-11px'
        }}
      />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('#999999b8','#737373')}
      borderRight='1px'
      borderRightColor={useColorModeValue('#999999b8','#737373')}
      w={{ base: 'full' }}
      pos='fixed'
      h='full'
      style={{
        overflowY: 'scroll'
      }} 
      {...rest}>
      <Flex>
        <Box w='100%'>
          <Center bg='#999999' h='25px' color='white'>
            <Text fontSize='md'>Меню</Text>
          </Center>
        </Box>
        <Spacer />
        <Box p='3' h='25px' bg='#999999' color='white'>
          <Center bg='#999999' h='2px' color='white'>
            <Icon 
              height='21' 
              width='21' 
              icon='fa:close' 
              onClick={onClose} 
              cursor='pointer'
              style={{
                marginTop: '-4px'
              }}
            />
          </Center>
        </Box>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, url, children, ...rest }) => {
  const { observe, width, height } = useDimensions({
    useBorderBoxSize: true, // Tell the hook to measure based on the border-box size, default is false
    polyfill: ResizeObserver, // Use polyfill to make this feature works on more browsers
  });

  return (
    <Link fontFamily='verdana' href={url} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center' p='1' role='group' cursor='pointer'w='100%'
        _hover={{bg: '#737373', color: 'white'}} fontSize='13px' {...rest}>
        <Text whiteSpace='nowrap' paddingRight='5px' textDecoration='underline'>{children}{'\t'}</Text>
        <Divider variant='dashed' orientation='horizontal' />
        {icon && (
          <Icon icon={icon} height='24' width='24' style={{
            minHeight: '24px',
            minWidth: '24px'
          }} />
        )}
      </Flex>
    </Link>
  );
};

export default function ZeroApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prevState: any) => !prevState)
  };

  return <>
    <Head>
      <meta 
        property="og:image" 
        content="/android-chrome-48x48.png" 
      />
      <link 
        rel="apple-touch-icon" 
        sizes="180x180"
        href="/apple-touch-icon.png" 
      />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="32x32" 
        href="/favicon-32x32.png" 
      />
      <link 
        rel="icon" 
        type="image/png" 
        sizes="16x16" 
        href="/favicon-16x16.png" 
      />
      <link 
        rel="manifest" 
        href="/manifest.json" 
      />
      <link 
        rel="mask-icon" 
        href="/safari-pinned-tab.svg" 
        color="#5bbad5" 
      />
      <meta 
        property="twitter:card" 
        content="summary" 
      />
      <meta 
        property="twitter:image" 
        content="/android-chrome-48x48.png" 
      />
      <meta 
        name="msapplication-TileColor" 
        content="#603cba" 
      />
      <meta 
        name="msapplication-TileImage" 
        content="/mstile-144x144.png" 
      />
      <meta 
        name="theme-color" 
        content="#222233" 
      />
      <meta 
        httpEquiv="X-UA-Compatible" 
        content="IE=Edge" 
      />
      <meta 
        httpEquiv="Content-Type" 
        content="text/html, charset=UTF-8" 
      />
      <meta 
        name="referrer" 
        content="strict-origin-when-cross-origin" 
      />
      <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1" 
      />
      <meta 
        name="google" 
        content="notranslate" 
      />
    </Head>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>
        <Box w='100%'>
          <Text position='absolute' fontSize='md' bgColor='#757575' h='25px' w='25px'>
            <Image 
              src='/android-chrome-36x36.png' 
              h='16px' 
              w='16px' 
              mt='4px'
              ml='4px' 
              alt='zeronet logo'
            />
          </Text>
          <Center bg='#999999' h='25px' color='white'>
            <Text fontSize='md' mr='-48px'>Блог Айокса</Text>
          </Center>
        </Box>
        <Spacer />
        <Box p='3' h='25px' bg='#999999' color='white'>
          <SimpleSidebar><></></SimpleSidebar>
        </Box>
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}