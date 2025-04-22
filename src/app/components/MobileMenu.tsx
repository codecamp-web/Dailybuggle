"use client"


import React from 'react'
import { MenuIcon, ShieldCloseIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

import { useState } from "react"


const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

  return (
    <div className="lg:hidden">
        <Button onClick={toggleMobileMenu}>
            {
                isMobileMenuOpen ? (<ShieldCloseIcon />) : (<MenuIcon />)
            }
        </Button>
    </div>
  )
}

export default MobileMenu