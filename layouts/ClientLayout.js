import Head from "next/head"
import Header from "../components/sections/Header"

function ClientLayout({children}) {
  return (
    <>
        <Head>
            <title>BEEDIVIDE</title>
        </Head>
        <Header/>
        {children}
    </>
  )
}

export default ClientLayout