import IconEmail from '@/svgIcons/IconEmail'
import styles from './styles.module.scss'
import Link from 'next/link'
import IconInstagram from '@/svgIcons/iconInstragram'
import IconX from '@/svgIcons/iconX'
import IconYoutube from '@/svgIcons/iconYoutube'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className="max-w-full md:max-w-208 mx-auto px-4 flex flex-col py-20">
        <span className={styles.heading}>Contact</span>
        <span className={`${styles.description} mt-8`}>
          {
            `
              Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing
              and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
              comprehensive skill set encompassing front-end and back-end technologies to deliver
            `
          }
        </span>

        <div className="flex items-center gap-2 mt-6">
          <IconEmail />
          <Link href="mailto:abmcodehub@gmail.com" className={styles.emailText}>abmcodehub@gmail.com</Link>
        </div>

        <div className="flex items-center gap-4 mt-10">
          <IconInstagram />
          <IconX />
          <IconYoutube />
        </div>

      </div>
    </div>
  )
}