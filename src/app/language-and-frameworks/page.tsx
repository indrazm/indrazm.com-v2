import { Scroll } from "../scroll";
export default async function Page() {
  return (
    <Scroll>
      <main className="max-w-3xl m-auto my-12 space-y-24 ">
        <section className="space-y-8">
          <h2 className="text-2xl">Language and frameworks</h2>
          <p>
            As a software engineer, I have experience working with a wide range of programming languages and frameworks. Here are some of the languages and
            frameworks I have worked with:
          </p>
          <h2 className="border-b pb-2 w-fit text-lg border-zinc-700">Web Development</h2>
          <section className="grid grid-cols-1 gap-12">
            <div className="space-y-4">
              <h3>Frontend</h3>
              <ul className="flex flex-wrap gap-2">
                <li>Reactjs (Most Favorite)</li>
                <li>Nextjs</li>
                <li>Tailwindcss</li>
                <li>Tailwind-Variants</li>
                <li>Typescript</li>
                <li>React Query</li>
                <li>Threejs</li>
                <li>Motion</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3>Backend</h3>
              <ul className="flex flex-wrap gap-2">
                <li>Nodejs</li>
                <li>Bunjs</li>
                <li>Typescript</li>
                <li>Expressjs</li>
                <li>Elysiajs</li>
                <li>Hono</li>
                <li>Python</li>
                <li>Flask</li>
                <li>FastAPI</li>
                <li>Django (Most Favorite)</li>
              </ul>
            </div>{" "}
            <div className="space-y-4">
              <h3>Database</h3>
              <ul className="flex flex-wrap gap-2">
                <li>Postgres (Most Favorite)</li>
                <li>SQLite (I am big fan of)</li>
                <li>MySQL</li>
                <li>Mongo</li>
              </ul>
            </div>
          </section>
          <h2 className="border-b pb-2 w-fit text-lg border-zinc-700">AI Development</h2>
          <section className="grid grid-cols-1 gap-12">
            <div className="space-y-4">
              <h3>LLM Models</h3>
              <ul className="flex flex-wrap gap-2">
                <li>OpenAI</li>
                <li>Mistral</li>
                <li>Claude</li>
                <li>Gemini</li>
                <li>Llama</li>
              </ul>
            </div>{" "}
            <div className="space-y-4">
              <h3>Frameworks</h3>
              <ul className="flex flex-wrap gap-2">
                <li>OpenAI SDK</li>
                <li>Langchain</li>
                <li>Langgraph</li>
                <li>Langsmith</li>
                <li>PydanticAI</li>
                <li>Agno</li>
                <li>Vercel AI</li>
              </ul>
            </div>{" "}
            <div className="space-y-4">
              <h3>VectorDB</h3>
              <ul className="flex flex-wrap gap-2">
                <li>PGVector</li>
                <li>ChromaDB</li>
                <li>Pinecone</li>
              </ul>
            </div>
          </section>
          <h2 className="border-b pb-2 w-fit text-lg border-zinc-700">DevOps</h2>
          <section className="grid grid-cols-1 gap-12">
            <div className="space-y-4">
              <h3>Tools</h3>
              <ul className="flex flex-wrap gap-2">
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>AWS (EC2, S3, RDS, Lambda)</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>CI/CD (GitHub Actions, Jenkins)</li>
                <li>Ansible</li>
                <li>Bash Scripting</li>
                <li>Nginx</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3>Server - Linux</h3>
              <ul className="flex flex-wrap gap-2 ">
                <li>Ubuntu</li>
                <li>Debian</li>
                <li>CentOS</li>
                <li>SSH</li>
                <li>Systemctl</li>
                <li>Package Management (apt, yum)</li>
                <li>Firewall Management (ufw, iptables)</li>
                <li>SELinux</li>
                <li>Monitoring and Logging (systemd-journald, syslog)</li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </Scroll>
  );
}
