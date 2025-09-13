import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <h1 className='text-pink-500 text-4xl text-center'>Writer Notes</h1>
      <Link href='/ideas'>ideas</Link>
    </>
  )
}
