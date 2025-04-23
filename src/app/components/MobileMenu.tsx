import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerClose,
  } from "@/components/ui/drawer"
  import { Button } from "@/components/ui/button"
  import { MenuIcon, ShieldCloseIcon } from "lucide-react"
  import { useContext, useState } from "react"

  import { Switch } from "@/components/ui/switch"
import { ThemeContext } from "@/context/themeContext"


  const MobileNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prev) => !prev)
    }
  
    const {isDarkMode, toggleTheme}:any = useContext(ThemeContext)
    
    
    return (
        <Drawer  direction="right" open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="lg:hidden"
           onClick={toggleMobileMenu}>
            <MenuIcon />
          </Button>
        </DrawerTrigger>
  
        <DrawerContent className="fixed right-0 top-0 h-full w-3/4 sm:w-1/2 bg-white dark:bg-gray-900 shadow-lg animate-in slide-in-from-right duration-500">
          <nav className="flex flex-col space-y-10 px-7 py-10 ">
            <DrawerClose asChild>
               <span>Theme <Switch onClick={toggleTheme}/></span>
            </DrawerClose>
            <DrawerClose asChild>
              <a href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">News</a>
            </DrawerClose>
            <DrawerClose asChild>
              <a href="/services" className="text-gray-700 dark:text-gray-300 hover:underline">Services</a>
            </DrawerClose>
            <DrawerClose asChild>
              <a href="/blog" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</a>
            </DrawerClose>
            <DrawerClose asChild>
              <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">About</a>
            </DrawerClose>
          </nav>
  
          <DrawerFooter>
            <DrawerClose asChild>
              <Button  className="w-full">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }
  
  export default MobileNav
  