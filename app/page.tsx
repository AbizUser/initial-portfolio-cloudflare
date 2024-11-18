// "use client"
import Header from './components/Header'
import Footer from "./components/Footer"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from './components/Contact'


export default function Home() {

  return (
    // <div className="min-h-screen bg-background text-foreground">
    <div className="min-h-screen bg-white ">
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer />
    </div>

  );
}
