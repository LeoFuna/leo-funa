import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Leonardo Funabashi',
  description: 'Meu portfólio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='dark:bg-dark-mode'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
