import Image from 'next/image'
import ParentComponent from './components/state/ParentComponent'
import SiblingComponentA from './components/context/siblingComponentA'
import SiblingComponentB from './components/context/siblingComponentB'
import SiblingComponentC from './components/context/siblingComponentC'
import { ThemeProvider } from './components/context/themeContext'
import ThemeButton from './components/context/ThemeButton'

export default function Home() {
  return (
    <div>
      <ParentComponent />
      <ThemeProvider>
        <SiblingComponentA />
        <SiblingComponentB />
        <SiblingComponentC />
        <ThemeButton/>
      </ThemeProvider>
      
    </div>
    
  )
}
