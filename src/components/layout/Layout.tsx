import Header from "./Header"
import type { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({children} : LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
    </div>
  )
}

export default Layout;