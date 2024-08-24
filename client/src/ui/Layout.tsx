import { Toaster } from "react-hot-toast"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
        <Header />
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          toastOptions={{
            style: {
              backgroundColor: "black",
              color: "white"
            }
          }}
        />
    </div>
  )
}

export default Layout