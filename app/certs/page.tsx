export const metadata = {
  title: 'Certificates',
  description: 'See my certificates.',
}

export default function Page() {
  return (
    <section>
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Certificates</h1>
          <p className="mb-4">
              <img src="/app/certs/resource/ojtcoc.png" alt="Certificate" />

          </p>
    </section>
  )
}
