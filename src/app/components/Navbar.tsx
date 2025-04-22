"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"

import MobileMenu from "./MobileMenu"
import { usePathname } from "next/navigation"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import {ThemeContext} from "@/context/themeContext"  

const Navbar = () => {
    const pathname = usePathname()

    const {isDarkMode, toggleTheme} = useContext(ThemeContext)

  return (
    <nav className={`${isDarkMode ? "bg-gray-900 text-white" : 
      "bg-white text-gray-900" }
    py-4 bg-gray-100 text-gray-900 shadow-md transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        <div className="text-lg font-bold">
            {/* Home */}
        <a href="/">Daily Buggle</a>
        </div>
    <div>
           {/* other navs */}
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-8">

        <NavigationMenuItem >
            <NavigationMenuLink href="/news"
             className={`${pathname === '/news' ? "text-green-500 font-bold" : ""}
              hover:text-red-500`} >
            News
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white"> 
                Services 
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>
                    <ul className="text-gray-600 shadow-md rounded-md py-4
                    px-5 space-y-2">
                        <li>
                            <NavigationMenuLink
                            className="hover:text-gray-600"
                             href="/services/research">
                                Research
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink
                            className="hover:text-gray-600"
                             href="/services/app">
                                Data Analytics
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink
                            className="hover:text-gray-600"
                             href="/services/seo">
                                Devops
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem >
            <NavigationMenuLink href="/contact" className={`${pathname === "/contact" ? 
            "text-green-500 font-bold" : ""} hover:text-red-500`} >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem >
            <NavigationMenuLink href="/about" className={`${pathname === "/about" ? 
            "text-green-500 font-bold" : ""}
              hover:text-red-500`} >
            About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
     </NavigationMenu>
   </div>
     <div className="hidden lg:flex items-center space-x-4">
        <div className="flex items-center" onClick={toggleTheme}>
            <span className="mr-2">Dark Mode</span>
            <Switch />
        </div>
        <Button variant="default" className="px-6">Login</Button>
     </div>
      <MobileMenu />
      </div>
    </nav> 
  )
}

export default Navbar
