import Image from 'next/image'
import styles from './styles.module.scss'
import Logo from '@/assets/logo.png'
import Link from 'next/link'

interface IMenuItem {
  label: string;
  href: string;
}

const menuItems: IMenuItem[] = [
  {
    label: 'Projects',
    href: '/'
  },
  {
    label: 'Experience',
    href: '/'
  },
  {
    label: 'Contact',
    href: '/'
  }
]

export default function Header () {
  return (
    <header className={styles.header}>
      <div className="max-w-full md:max-w-208 mx-auto px-4">
        <div className="flex justify-between items-center">
          <Image src={Logo} width={80} height={80} alt='Logo' />
          <nav className="flex items-center">
            <ul className="flex gap-2 md:gap-8">
              {
                menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}