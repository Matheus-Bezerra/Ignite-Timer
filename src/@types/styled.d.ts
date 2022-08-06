import 'styled-components'
import { defaultTheme } from '../styles/default'

type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface defaultTheme extends themeType {}
}
