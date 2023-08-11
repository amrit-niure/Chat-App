import Button from "@/components/UI/Button"
import { db } from "@/lib/db"
import Link from "next/link"

export default async function Home() {
    return (
      <div className="h-screen w-full flex items-center justify-center">

   <Link href='/login'>
   <Button variant={"default"}>Login Page</Button>
   </Link>
      </div>
  )
}
