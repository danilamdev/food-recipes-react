import React from 'react'
import Veggie from '../components/veggie'
import Popular from '../components/popular'
import { motion } from 'framer-motion'

export default function Home () {
  return (
     <motion.div
     animate={{ opacity: 1 }}
     initial={{ opacity: 0 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 1 }}>
        <Veggie />
        <Popular />
     </motion.div>
  )
}
