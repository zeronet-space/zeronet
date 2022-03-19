import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

export default extendTheme({
  colors: {
    black: '#999'
  },
  components: {
    Component: {
      baseStyle: {
        backgroundColor: '#999999b8'
      },
    }
  },
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      body: {
        bg: mode('#999999b8','#737373')(props),
      }
    })
  },
  useSystemColorMode: true,
})