import { pageConfig } from "@/config/page-config"
import Link from "next/link"

export const MainNav = () => {

  return <nav>
    <ul>
      <li><Link href={pageConfig.home.path}>Home</Link></li>
      <li><Link href={pageConfig.create.path}>Create</Link></li>
      <li><Link href={pageConfig.account.path}>Account</Link></li>
    </ul>
  </nav>
}