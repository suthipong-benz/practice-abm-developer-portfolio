import IconApple from '@/svgIcons/iconApple'
import styles from './styles.module.scss'
import IconGoogle from '@/svgIcons/iconGoogle'
import IconMeta from '@/svgIcons/iconMeta'

export default function Experiences () {
  return (
    <div className="flex flex-col items-center">
      <span className={styles.heading}>EXPERIENCES</span>

      <div className="flex flex-col gap-4 w-full mt-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex md:items-center gap-4">
            <IconGoogle />
            <span className={styles.experienceHeading}>Lead Software Engineer at Google</span>
          </div>
          <span className={styles.experienceTimeline}>Nov 2019 - Present</span>
        </div>
        <span className={styles.experienceDescription}>
          {
            `
              As a Senior Software Engineer at Google, I played a pivotal role in developing innovative 
              solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, 
              I contributed to the enhancement of search accuracy and efficiency, optimizing user 
              experiences for millions of users worldwide.
            `
          }
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full mt-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex md:items-center gap-4">
            <IconApple />
            <span className={styles.experienceHeading}>Junior Software Engineer at Apple</span>
          </div>
          <span className={styles.experienceTimeline}>Jan 2016 - Dec 2017</span>
        </div>
        <span className={styles.experienceDescription}>
          {
            `
              During my tenure at Apple, I held the role of Software Architect, where I played a key 
              role in shaping the architecture of mission-critical software projects. Responsible for 
              designing scalable and efficient systems, I provided technical leadership to a cross-functional team.
            `
          }
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full mt-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex md:items-center gap-4">
            <IconMeta />
            <span className={styles.experienceHeading}>Software Engineer at Meta</span>
          </div>
          <span className={styles.experienceTimeline}>Jan 2017 - Oct 2019</span>
        </div>
        <span className={styles.experienceDescription}>
          {
            `
              At Meta, I served as a  Software Engineer, focusing on the design and implementation of 
              backend systems for the social media giant's dynamic platform. Working on projects that 
              involved large-scale data processing and user engagement features, I leveraged my 
              expertise to ensure seamless functionality and scalability.
            `
          }
        </span>
      </div>

    </div>
  )
}