'use client'
import React from 'react'
import { IconPack } from './icons'

const Icon = ({ name, width = '24', height = '24' }) => {
  const Component = IconPack[name]
  return <Component width={width} height={height} aria-label={name} />
}

export default Icon
