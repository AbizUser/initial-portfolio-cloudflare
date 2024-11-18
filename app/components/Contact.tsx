// import { Mail } from 'lucide-react'
import MailForm from "./MailForm/MailForm"

const Contact = () => {
  return (
    <section>
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <div className="flex space-x-4">
    {/* <div className="flex space-x-4 max-w-5xl m-auto"> */}
      {/* <Button variant="outline" size="icon">
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">LinkedIn</span>
      </Button> */}
      {/* <Button variant="outline" size="icon">
        <Mail className="h-4 w-4" />
        <span className="sr-only">Email</span>
      </Button> */}
      <MailForm/>
    </div>
  </section>
  )
}

export default Contact
