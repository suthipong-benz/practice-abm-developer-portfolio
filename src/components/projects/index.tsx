import Image from 'next/image'
import styles from './styles.module.scss'

import projectThumbnail1 from '@/assets/project-thumbnail-1.png'
import projectThumbnail2 from '@/assets/project-thumbnail-2.png'
import IconView from '@/svgIcons/iconView'

export default function Projects () {
  return (
    <div className="flex flex-col items-center gap-8">
      <span className={styles.heading}>PROJECTS</span>

      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <Image className={`${styles.image} w-full h-auto`} src={projectThumbnail1} width={0} height={0} alt='project thumbnail 1' />
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <span className={styles.label}>CLICK HERE TO VISIT</span>
              <span className={styles.title}>HTML TUTORIAL</span>
            </div>
            <div className={styles.iconWrapper}>
              <IconView />
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <Image className={`${styles.image} w-full h-auto`} src={projectThumbnail2} width={0} height={0} alt='project thumbnail 1' />
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <span className={styles.label}>CLICK HERE TO VISIT</span>
              <span className={styles.title}>CSS TUTORIAL</span>
            </div>
            <div className={styles.iconWrapper}>
              <IconView />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}