import Image from 'next/image'
import styles from './styles.module.scss'
import AvatarImage from '@/assets/avatar.png'

export default function Avatar () {
  return (
    <div className={styles.avatarWrapper}>
      <Image src={AvatarImage} width={213} height={213} alt="avatar image" />
    </div>
  )
}