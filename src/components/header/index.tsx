import Image from 'next/image'
import styles from './styles.module.scss'
import Logo from '@/assets/logo.png'
import Link from 'next/link'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className="max-w-full md:max-w-208 mx-auto px-4">
        <div className="flex justify-between items-center">
          <Image src={Logo} width={80} height={80} alt='Logo' />
          <nav className="flex items-center">
            <ul className="flex gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">Experience</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}