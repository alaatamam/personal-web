export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* HERO */}
        <header className="space-y-6">
          <p className="text-sm text-zinc-600">Boston • Data Science • ML</p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ala’a Tamam
          </h1>

          <p className="text-lg leading-relaxed text-zinc-700">
            I work with complex data and real systems, and I enjoy the process of
            making them make sense. I’ve built analytics pipelines, dashboards, and
            ML-powered tools across global organizations, nonprofits, and public
            institutions, often working end-to-end from raw data to something people
            actually use.
          </p>

          <p className="text-sm text-zinc-600">
            Currently seeking post-graduate data science and machine learning roles.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#experience"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            >
              Projects
            </a>
            <a
              href="#sidequests"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            >
              Side quests
            </a>
            <a
              href="#coursework"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            >
              Coursework
            </a>
            <a
              href="#resume"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            >
              Resume
            </a>
            <a
              href="mailto:tamam.a@northeastern.edu"
              className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
            >
              Email
            </a>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-20">
          <h2 className="text-xl font-semibold">Experience</h2>

          <div className="mt-6 space-y-6">
            <ExperienceItem
              role="Data Science and Artificial Intelligence Intern"
              org="United Nations Development Coordination Office"
              time="Oct 2025 – Present"
              desc="Member of Digital Solutions Laboratory. I engineer ETL pipelines and analytics infrastructure spanning 140 countries, producing SDG-aligned indicators and real-time Power BI dashboards to support monitoring and evaluation across UN country teams."
              tech={["Python", "SQL", "Power Query", "Power BI"]}
            />

            <ExperienceItem
              role="Data Science Co-op"
              org="United Way of Massachusetts Bay"
              time="Jul – Dec 2025"
              desc="Designed end-to-end data quality pipelines for donor and program data, deduplicating 32,000+ records and improving data accuracy while stabilizing legacy systems used by finance and operations."
              tech={["SQL", "Python", "Java", "JavaScript", "Node.js"]}
            />

            <ExperienceItem
              role="Research Intern"
              org="Center for Human-Compatible AI (UC Berkeley)"
              time="Jun – Sep 2025"
              desc="Authored and presented research on AI safety and accountability in high-risk deployments, combining comparative case studies with independent technical study of graph-based methods."
              tech={["Research", "Technical Writing", "Graph Methods"]}
            />

            <ExperienceItem
              role="Biotech Data Scientist & Analyst"
              org="Northeastern University"
              time="May 2023 – Jul 2025"
              desc="Contributed to a dataset cataloguing 2,000+ biotech products across 400+ startups, and conducted Python-based statistical analyses of cardiovascular therapies to assess treatment efficacy and clinical outcomes."
              tech={["Python", "Statistical Analysis", "Data Curation"]}
            />

            <ExperienceItem
              role="Data Science & Marketing Analytics Co-op"
              org="ServiceNow"
              time="Jul – Dec 2024"
              desc="Automated reporting workflows with Excel VBA and built a Python pipeline using the YouTube API to extract and analyze metrics across 500+ videos."
              tech={["Python", "Excel VBA", "YouTube API"]}
            />

            <ExperienceItem
              role="Data Analytics Intern"
              org="Office of U.S. Senator Elizabeth Warren"
              time="May – Aug 2024"
              desc="Built relational databases and developed visualizations of constituent opinions and issue trends to support internal analysis and decision-making."
              tech={["SQL", "Relational Databases", "Data Visualization"]}
            />

            <ExperienceItem
              role="Undergraduate Teaching Assistant"
              org="Khoury College of Computer Science, Northeastern University"
              time="Dec 2022 – Aug 2023"
              desc="Teaching assistant for Discrete Structures (CS1800), supporting instruction, grading, and concept clarification."
              tech={["Python", "Discrete Math", "Statistics", "Algorithms"]}
            />

            <ExperienceItem
              role="Specialty Pharmacy Technician"
              org="Walgreens"
              time="Mar 2021 – Jan 2023"
              desc="Prepared and verified prescriptions, ensured HIPAA compliance, processed insurance claims, and supported high-volume patient service."
              tech={["HIPAA", "Claims Processing", "Inventory Management"]}
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div className="mt-6 space-y-8">
            {/* Code4Community */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Code4Community</h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Full-stack developer building and deploying production web
                applications for Boston-based nonprofits, with end-to-end ownership
                across frontend, backend, and database architecture. Applications
                collectively serve over 60,000 live users.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  Built and deployed four full-stack applications using React,
                  TypeScript, Node.js, and PostgreSQL, taking features from initial
                  design through production.
                </li>
                <li>
                  Developer on <span className="font-medium">Project Constellation</span>{" "}
                  for <span className="font-medium">The Star Won’t Go Out</span>{" "}
                  (founded by John Green), supporting families affected by childhood
                  cancer.
                </li>
                <li>
                  Developer on <span className="font-medium">Securing Safe Food</span>{" "}
                  for the City of Boston, engineering features that streamline
                  access to safe, nutritious food and connect providers with
                  vulnerable communities.
                </li>
                <li>
                  Currently developing the platform for{" "}
                  <span className="font-medium">826 Boston</span>, building tools that
                  support youth writing and literacy programs.
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "PostgreSQL"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CivicConnect */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">CivicConnect</h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Full-stack developer and communications liaison on a GPT-powered
                “digital intern” that helps congressional offices intake constituent
                service requests, collect opinions, and generate analytics from daily
                correspondence.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  Implemented the chatbot using Python, Java, and Node.js to support
                  intake workflows, approved talking points, and reporting outputs.
                </li>
                <li>
                  Led technical and policy-facing presentations to congressional
                  offices (including Congressman Moulton’s office), contributing to
                  project adoption by the Chief Administrative Office of the House
                  of Representatives.
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://burnes.northeastern.edu/projects/civic-connect-congressional-chatbot/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-black"
                >
                  Burnes Center feature
                </a>
                <a
                  href="https://www.popvox.org/blog/civicconnect"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-black"
                >
                  POPVOX article
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "Java", "Node.js", "NLP", "APIs"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BigSister */}
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-semibold">Big Sister App</h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Co-founded and led full-stack development of a campus safety platform
                supporting real-time alerts, geospatial risk visualization, and secure
                data storage for safety-focused use cases.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  Architected the web application using Python, Java, and SQL, with a
                  focus on secure workflows and data integrity.
                </li>
                <li>
                  Built backend pipelines and application logic powering interactive
                  heat maps, incident reporting, and resource matching to enable
                  data-driven safety insights.
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.khoury.northeastern.edu/channeling-experience-and-identity-first-year-khoury-students-build-anti-harassment-app/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-black"
                >
                  Khoury article
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Python", "Java", "SQL", "Geospatial", "Full-stack"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SIDE QUESTS */}
        <section id="sidequests" className="mt-20">
          <h2 className="text-xl font-semibold">Passions & side quests</h2>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold">
              Director of Fundraising & Technology — White Nile Youth Association
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              Built and maintain the organization’s website from the ground up (
              <a
                href="https://www.wnya.org"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-black"
              >
                wnya.org
              </a>
              ), manage the backend database and digital infrastructure, and lead
              technical strategy for fundraising initiatives. Organized and executed
              two large charity galas for Sudan, raising over $5,000 in total — first
              for HRRDS and later for El-Fashir Relief through Sadagat USA.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Web Development",
                "Database Management",
                "Fundraising Tech",
                "Event Ops",
                "Community Leadership",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* COURSEWORK */}
        <section id="coursework" className="mt-20">
          <h2 className="text-xl font-semibold">Selected coursework</h2>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <p className="text-sm leading-relaxed text-zinc-700">
              Throughout my undergraduate education, I’ve maintained a 3.85 GPA and
              have been on the Dean’s List every semester. I’m also a member of
              Northeastern University Honors. As a data science major, I pursued the
              programmatic pathway to build a strong foundation as a developer, which
              later translated into confidence and aptitude as a data scientist :)
            </p>

            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              <li>Machine Learning & Data Mining I</li>
              <li>Algorithms & Data Structures</li>
              <li>Database Design</li>
              <li>Object-Oriented Design</li>
              <li>Fundamentals of Computer Science I & II</li>
              <li>Fundamentals of Data Science</li>
              <li>Discrete Structures</li>
              <li>Advanced Programming with Data</li>
              <li>Advanced Statistics</li>
              <li>Calculus Series</li>
              <li>Artificial Intelligence 4 Impact</li>
            </ul>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="mt-20">
          <h2 className="text-xl font-semibold">Resume</h2>

          <div className="mt-6 rounded-2xl border border-zinc-200 p-5">
            <p className="text-sm text-zinc-700">
              For a detailed view of my experience and technical background:
            </p>

            <div className="mt-4">
              <a
                href="/Alaa_Tamam_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
              >
                View resume (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-zinc-200 pt-8 text-sm text-zinc-600">
          <div className="flex gap-4">
            <a href="https://github.com/alaatamam" className="hover:text-black">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ala-a-tamam"
              className="hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tamam.a@northeastern.edu"
              className="hover:text-black"
            >
              tamam.a@northeastern.edu
            </a>
          </div>

          <p className="mt-4">made with &lt;3 by Ala’a</p>
        </footer>
      </div>
    </main>
  );
}

/* COMPONENT */

function ExperienceItem({
  role,
  org,
  time,
  desc,
  tech,
}: {
  role: string;
  org: string;
  time: string;
  desc: string;
  tech: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">{role}</h3>
        <span className="text-sm text-zinc-600">{time}</span>
      </div>

      <p className="mt-1 text-sm text-zinc-600">{org}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-700">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
