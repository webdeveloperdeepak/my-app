'use client';
import { useEffect } from 'react'
import Clarity from '@microsoft/clarity';

export default function ClarityInit() {
  useEffect(() => {
    if(process.env.NODE_ENV === 'production') {
        Clarity.init('s4ymvbml4a')
    }
  }, [])
  return null
}
