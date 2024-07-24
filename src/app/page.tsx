import { BlogCard } from "@/components/blogCard";
import { ExperienceCard } from "@/components/experienceCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1500px] m-auto my-12 space-y-32">
      <section className="space-y-12">
        <div>
          <div>Software Engineering</div>
          <div>Product Design</div>
          <div>Tech Savvy Generalist</div>
        </div>
        <h1>
          Interdisciplinary Generalist <br />& Software Engineer.
        </h1>
        <div className="flex gap-6 items-center">
          <a href="https://x.com/indrazulfi" className="text-indigo-300" target="_blank" rel="noopener noreferrer">
            x.com
          </a>
          <a href="https://github.com/indrazm" className="text-indigo-300" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href="mailto:me@indrazm.com" className="text-indigo-300" target="_blank" rel="noopener noreferrer">
            email
          </a>
          <a href="/resume.pdf" className="text-indigo-300" target="_blank" rel="noopener noreferrer">
            resume
          </a>
          <div className="flex gap-2 items-center text-indigo-300 animate-pulse bg-indigo-900 px-2.5 py-1 rounded-full w-fit">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <div className="text-sm font-medium">Open for Oppotunities</div>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <div className="flex justify-between">
          <div>
            <h3>Selected Portfolio</h3>
            <div className="border-t border-slate-700 w-5 mt-2" />
          </div>
          {/* <div className="flex flex-col items-end">
            <h3>See All</h3>
            <div className="border-t border-slate-700 w-5 mt-2" />
          </div> */}
        </div>
        <div className="grid grid-cols-8 gap-6">
          <Link href="/portfolios/designstripe-mockups" className="col-span-4 h-[480px] overflow-hidden relative">
            <Image src="/portfolios/designstripe-mockups/cvr.png" alt="placeholder" width={900} height={900} />
          </Link>
          <Link href="/portfolios/devscale-lms" className="col-span-2 h-[480px] overflow-hidden relative">
            <Image src="/portfolios/devscale-lms/cvr.png" alt="placeholder" width={900} height={900} />
          </Link>
          <Link href="/portfolios/bexlite" className="col-span-2 h-[480px] overflow-hidden relative">
            <Image src="/portfolios/bexlite/c.png" alt="placeholder" width={900} height={900} />
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3>About Me</h3>
          <p className="text-lg text-slate-300 tracking-tight">
            A generalist with a passion for design, product development, and software engineering. My collaborative efforts span across the globe, partnering
            with diverse teams to create thoughtful products and immersive spatial experiences.
          </p>
          <p className="text-lg text-slate-300 tracking-tight">
            Throughout my career, I have gained extensive experience in UI/UX design, product management, and the development of impactful products that enhance
            human experiences.
          </p>
          <p className="text-lg text-slate-300 tracking-tight">
            My work is driven by a commitment to innovation and a deep understanding of user needs, ensuring that every project I undertake makes a meaningful
            difference.
          </p>
        </div>
        <div className="space-y-4">
          <h3>Experiences</h3>
          <ExperienceCard company="Pixellin Studio" position="Creative Web Designer and CoFounder" year="AUG 2011 - JULY 2016" isOnsite />
          <ExperienceCard company="SSH International, Bahrain" position="Generalist" year="AUG 2016 - JULY 2020" isOnsite />
          <ExperienceCard company="Designstripe, Canada" position="Generalist and Software Engineer" year="AUG 2020 - MAY 2024" />
          <ExperienceCard company="Devscale Indonesia" position="Founder and Mentor" year="MAY 2023 - TODAY" isOnsite />
        </div>
      </section>
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3>Writings</h3>
        </div>
        <section className="grid grid-cols-3 gap-6">
          <BlogCard title="How I write API" slug="how-i-write-api" date="24 July 2024" />
          <BlogCard title="Building Nextjs App with Clean Layered Architecture" date="8 July 2024" slug="building-nextjs-app-with-clean-layered-architecture" />
          <BlogCard title="Sqlite is GOAT!" slug="sqlite-is-goat" date="22 June 2024" />
          <BlogCard title="Common Mistakes in Developing Software with Nextjs" slug="common-mistakes-in-developing-software-with-nextjs" date="12 July 2024" />
        </section>
      </section>
      <section className="grid grid-cols-3 gap-12 items-start">
        <div className="flex flex-col justify-between h-full">
          <p className="text-balance">
            I do innovative solutions through user-centric design, strategic development, and transformative engineering. Global collaboration crafting digital
            experiences that elevate human potential and meaningful progress.
          </p>
          <p className="uppercase text-slate-200 font-medium">Let&apos;s Collaborate</p>
        </div>
        <h1 className="col-span-2 text-8xl">Building Impactful Products for Human</h1>
      </section>
      <div className="space-y-4">
        <h2 className="uppercase text-xl text-slate-800">Experts Skills</h2>
        <div className="flex gap-6 flex-wrap">
          <div>Nextjs</div>
          <div>Reactjs</div>
          <div>Expressjs</div>
          <div>MongoDB</div>
          <div>Tailwindcss</div>
          <div>Nodejs</div>
          <div>Bunjs</div>
          <div>Prisma</div>
          <div>Sqlite</div>
          <div>drizzleORM</div>
          <div>prismaORM</div>
          <div>HTMX</div>
          <div>Elysiajs</div>
          <div>Storybook</div>
          <div>NXMonorepo</div>
          <div>Turborepo</div>
          <div>tRPC</div>
          <div>Websocket</div>
          <div>Vitest</div>
          <div>Cypress</div>
        </div>
      </div>
    </main>
  );
}
