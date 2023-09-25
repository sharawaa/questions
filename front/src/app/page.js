import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Questions from "@/components/Questions";


export default function Home() {
  return (
   <div className='flex flex-col bg-purple-100 min-h-screen'>
   <Header/>
   <Questions/>
   <Footer />
   </div>
  )
}
