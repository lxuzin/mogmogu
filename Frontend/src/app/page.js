import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <h1><Link href="/login">로그인 화면으로 가기</Link></h1>
        <br></br>
    </>

  )
}
