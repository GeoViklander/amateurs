import Image from 'next/image'
import { Inter } from '@next/font/google'
import './globals.css';
import { CardItem } from '@components/components/cards/card-item/card-item';
import { fazenda } from '../constants/constans'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = fazenda
  return (
    <main className="bg-[#272727] flex justify-center">
      <div className='bg-white'>
        <CardItem fazenda={data} />
      </div>
    </main>
  )
}
