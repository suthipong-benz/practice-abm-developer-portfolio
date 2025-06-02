import IconCSS from '@/svgIcons/iconCSS';
import Button from '../button';
import Avatar from './components/avatar';
import styles from './styles.module.scss'
import IconHTML from '@/svgIcons/iconHTML';
import IconJavascript from '@/svgIcons/iconJavascript';
import IconNodeJS from '@/svgIcons/iconNodeJS';
import IconReactJS from '@/svgIcons/iconReactJS';

export default function Introduce () {
  return (
    <>
      <div className="flex flex-col items-center">
        <Avatar />

        <span className={`${styles.headingText} mt-10`}>
          I do code and
          <br/>make content <span className={styles.gradientText}>about it!</span>
        </span>

        <span className={`${styles.introduceText} mt-10`}>
          I am a seasoned full-stack software engineer with over 
          <br />8 years of professional experience, specializing in backend development. 
          <br />My expertise lies in crafting robust and scalable SaaS-based 
          <br />architectures on the Amazon AWS platform.
        </span>

        <div className="flex gap-4 mt-10">
          <Button>Get In Touch</Button>
          <Button variants={'outline'}>Download CV</Button>
        </div>

        <span className={`${styles.experienceText} mt-20`}>EXPERIENCE WITH</span>

        <div className="flex gap-15 mt-10">
          <IconCSS />
          <IconHTML />
          <IconJavascript />
          <IconNodeJS />
          <IconReactJS />
        </div>
      </div>
    </>
  )
}