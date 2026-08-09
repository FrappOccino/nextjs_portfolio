import { Card } from '@/shared/components/Card';


export default function Projects() {
  return (
    <div className='w-full'>
      <div className="w-full">
        <h4 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold md:text-4xl lg:text-5xl mt-30">
          A small selection of recent{" "}
          <p className="text-violet-400">projects</p>
        </h4>
        <div className="w-full flex flex-row flex-wrap gap-5 p-5 justify-center overflow-auto h-[800px] mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
