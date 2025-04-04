import { BlogCard } from "@/components/blogCard";
import { ExperienceCard } from "@/components/experienceCard";
import Image from "next/image";
import photo from "../../public/me.jpg";
import { SpinningText } from "@/components/magicui/spinning-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <main className="max-w-3xl m-auto my-12 space-y-24">
      <AnimatedGridPattern
        numSquares={80}
        maxOpacity={0.3}
        duration={0.2}
        repeatDelay={1}
        className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-50")}
      />
      <section className="space-y-8">
        <div className="space-y-2">
          <h1>Software & AI Engineer</h1>
          <h2 className="text-2xl text-zinc-200">Making a Difference Through Technology</h2>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://x.com/indrazulfi" className="text-stone-300" target="_blank" rel="noopener noreferrer">
            x.com
          </a>
          <a href="https://github.com/indrazm" className="text-stone-300" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href="mailto:me@indrazm.com" className="text-stone-300" target="_blank" rel="noopener noreferrer">
            email
          </a>
        </div>
      </section>
      <section className="space-y-8">
        <div className="relative">
          <SpinningText reverse className="text-xs absolute top-2 left-2" duration={5} radius={6}>
            think different - do better
          </SpinningText>
          <Image alt="Indra Zulfi" src={photo} className="w-24 h-24 rounded-xl grayscale" />
        </div>
        <h3>About Me</h3>
        <p className="text-lg text-stone-300 ">
          Solving complex problems and building the future drives my work as a software and AI engineer. My background spans design, product development, and
          software engineering, allowing me to approach challenges from a holistic perspective.
        </p>
        <p className="text-lg text-stone-300 ">
          A desire to create innovative, user-centered solutions that leverage the power of AI and modern software development practices fuels my work.
          Collaborating with diverse teams worldwide, I strive to build products and experiences that make a tangible difference.
        </p>
      </section>
      <section className="space-y-8">
        <div className="flex justify-between items-center">
          <h3>Writings</h3>
        </div>
        <section className="grid grid-cols-1 gap-2">
          <BlogCard title="Nested API endpoint and It's issue" slug="nested-api-endpoint" date="27 October 2024" />
          <BlogCard title="How I write API" slug="how-i-write-api" date="24 July 2024" />
          <BlogCard title="Building Nextjs App with Clean Layered Architecture" date="8 July 2024" slug="building-nextjs-app-with-clean-layered-architecture" />
          <BlogCard title="Sqlite is GOAT!" slug="sqlite-is-goat" date="22 June 2024" />
          <BlogCard title="Common Mistakes in Developing Software with Nextjs" slug="common-mistakes-in-developing-software-with-nextjs" date="12 July 2024" />
        </section>
      </section>
      <section className="space-y-6">
        <h3>Experiences</h3>
        <section className="-space-y-[1px]">
          <ExperienceCard isActive company="Adgorithmics, Singapore" position="Sr. Software Engineer" year="AUG 2024" />
          <ExperienceCard company="Devscale Indonesia" position="Founder and Mentor" year="MAY 2023" isOnsite />
          <ExperienceCard company="Designstripe, Canada" position="Generalist and Software Engineer" year="AUG 2020 - MAY 2024" />
          <ExperienceCard company="SSH International, Bahrain" position="Generalist" year="AUG 2016 - JULY 2020" isOnsite />
          <ExperienceCard company="Pixellin Studio" position="coFounder and Web Developer" year="AUG 2011 - JULY 2016" isOnsite />
        </section>
      </section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll defaultVelocity={0.2} numRows={1} className="text-sm tracking-wider">
          javascript - typescript - python - django - fastapi - nextjs - react - nodejs - tailwindcss - css - html - openai - mistral - llama - claude -
        </VelocityScroll>
      </div>
      <section className="space-y-2">
        <h2 className="text-balance">Building Impactful AI-Powered User Experiences</h2>
        <p className="text-sm">
          I do innovative solutions through user-centric design, strategic development, and transformative engineering. Global collaboration crafting digital
          experiences that elevate human potential and meaningful progress.
        </p>
      </section>
    </main>
  );
}
