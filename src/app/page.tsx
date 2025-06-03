import Experiences from '@/components/experiences';
import Introduce from '@/components/introduce';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div className="max-w-full md:max-w-208 mx-auto px-4">

      <div className="mt-16">
        <Introduce />
      </div>

      <div className="mt-20">
        <Projects />
      </div>

      <div className="mt-20 mb-24">
        <Experiences />
      </div>
      
    </div>
  );
}
