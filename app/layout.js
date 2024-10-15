import './globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Kayson Paints",
  description: "Kayson Paints",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
