import { redirect } from 'next/navigation'

export default function Index() {
  redirect('/login')
  return (
    <div id="root">
      <h1>Index</h1>
    </div>
  )
}
