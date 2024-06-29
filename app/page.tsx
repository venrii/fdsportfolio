import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, I am Franc Daniel Samonte, a Computer Science undergraduate.
        Currently studying at Mapua Malayan Colleges in Laguna, Philippines.
        Throughout my college years, I have programmed various applications and software,
        honing my skills in different programming languages and technologies.
        My passion lies in solving complex problems and creating effective solutions,
        driving me to continually refine my abilities.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
