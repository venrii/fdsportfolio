export default function Page() {
  return (
    <section>
    <center>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
      </h1>
    </center>
          <center> <img src="/face.png" alt="Picture" width="200" height="200" /> </center>
      <br/><br/>
      <p className="mb-4">
              {`Hi, I am Franc Daniel Samonte, an aspiring developer from the Philippines.`}
          </p>
    <p className="mb-4">
              {`Currently studying at Mapua Malayan Colleges in Laguna, Philippines.
        Throughout my college years, I have programmed various applications and software,
        honing my skills in different programming languages and technologies.`}
          </p>
    <p className="mb-4">
              {`My passion lies in solving complex problems and creating effective solutions,
        driving me to continually refine my abilities.`}
      </p>
    </section>
  )
}
