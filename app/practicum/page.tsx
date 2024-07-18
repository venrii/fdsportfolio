export const metadata = {
  title: 'Final Project',
  description: 'See my internship experience.',
}

export default function Page() {
  return (
    <section>
        <center><h1 className="font-semibold text-2xl mb-8 tracking-tighter">Overview of the Practicum Engagement</h1></center>
        <p className="mb-4">
            {`Fasttrack Solutions is a consultancy services company that provides world-class computerized business solutions to Enterprise and SMB markets. 
            Founded in the Philippines in 2005, Fasttrack Solutions is ONE of the largest business technologies providers in Asia Pacific and is now the 
            go-to partner in ERP solutions, cloud migration, cloud services, etc., of SMEs and large enterprises.`}
        </p>
        <p className="mb-4">
            {`During my practicum, I was primarily assigned to observe how my supervisors handle and create solutions within the company. My supervisors 
            provided me with various small tasks every so often to assist with ongoing projects and ensure my active participation in the workflow. 
            Additionally, I was entrusted with two significant activities that allowed me to apply and enhance my skills in real-world scenarios.`}
        </p>
        <p className="mb-4">
            {`As per requirements, the total hours rendered for my practicum amounted to 324 hours. This comprised 120 hours dedicated to an online program 
            called the "CODEX Program", which focused on SQL, Microsoft Software and problem-solving techniques. The remaining 204 hours were spent 
            in work immersion, where I gained experience in the company's operational environment.`}
          </p>
          <a
              className="mb-4"
              href="/Final Report.pdf"
              download
          >
              <p className="ml-2 h-7">My Final Report</p>
          </a>
    </section>
  )
}
