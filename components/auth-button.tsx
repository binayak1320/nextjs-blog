"use client"

import React from 'react'
import { Button } from './ui/button'
import { useSession, signIn, signOut } from "next-auth/react"


export default function AuthButton() {
  return (
    <Button variant="outline" onClick={() => signIn('google')}>Login</Button>
  )
}
