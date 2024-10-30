import { BlogCard } from "@/components/blogCard";
import { ExperienceCard } from "@/components/experienceCard";

export default async function Home() {
  return (
    <main className="max-w-4xl m-auto my-12 space-y-24">
      <section className="space-y-6">
        <div>
          <div>Software Engineering</div>
          <div>Product Design</div>
          <div>Tech Savvy Generalist</div>
        </div>
        <h1>
          Interdisciplinary Generalist <br />& Software Engineer.
        </h1>
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
      <section className="space-y-4">
        <h3>About Me</h3>
        <p className="text-lg text-stone-300 ">
          A generalist with a passion for design, product development, and software engineering. My collaborative efforts span across the globe, partnering with
          diverse teams to create thoughtful products and immersive spatial experiences.
        </p>
        <p className="text-lg text-stone-300 ">
          Throughout my career, I have gained extensive experience in UI/UX design, product management, and the development of impactful products that enhance
          human experiences.
        </p>
        <p className="text-lg text-stone-300 ">
          My work is driven by a commitment to innovation and a deep understanding of user needs, ensuring that every project I undertake makes a meaningful
          difference.
        </p>
      </section>
      <section className="space-y-4">
        <h3>Experiences</h3>
        <ExperienceCard company="Pixellin Studio" position="Creative Web Designer and CoFounder" year="AUG 2011 - JULY 2016" isOnsite />
        <ExperienceCard company="SSH International, Bahrain" position="Generalist" year="AUG 2016 - JULY 2020" isOnsite />
        <ExperienceCard company="Designstripe, Canada" position="Generalist and Software Engineer" year="AUG 2020 - MAY 2024" />
        <ExperienceCard company="Devscale Indonesia" position="Founder and Mentor" year="MAY 2023" isOnsite />
        <ExperienceCard company="Adgorithmics, Singapore" position="Sr. Software Engineer" year="AUG 2024" />
      </section>
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3>Writings</h3>
        </div>
        <section className="grid grid-cols-2 gap-6">
          <BlogCard title="Nested API endpoint and It's issue" slug="nested-api-endpoint" date="27 October 2024" />
          <BlogCard title="How I write API" slug="how-i-write-api" date="24 July 2024" />
          <BlogCard title="Building Nextjs App with Clean Layered Architecture" date="8 July 2024" slug="building-nextjs-app-with-clean-layered-architecture" />
          <BlogCard title="Sqlite is GOAT!" slug="sqlite-is-goat" date="22 June 2024" />
          <BlogCard title="Common Mistakes in Developing Software with Nextjs" slug="common-mistakes-in-developing-software-with-nextjs" date="12 July 2024" />
        </section>
      </section>
      <section className="grid gap-12 items-start">
        <h1 className="text-balance text-6xl">Building Impactful Products for Human</h1>
        <p className="text-balance">
          I do innovative solutions through user-centric design, strategic development, and transformative engineering. Global collaboration crafting digital
          experiences that elevate human potential and meaningful progress.
        </p>
      </section>
    </main>
  );
}
