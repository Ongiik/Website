import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
   return (
      <>
      <div className="contact-page">
         <h1>Contact</h1>
         <p>I would love to get in touch with you!</p>
         <ul>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Ongiik"
               >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  <h2>GitHub</h2>
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/benen-kim-59111b184/"
               >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                  <h2>LinkedIn</h2>
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:benenonkikim@gmail.com"
               >
                  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                  <h2>E-Mail</h2>
               </a>
            </li>
         </ul>
      </div>
      </>
   )
}

export default Contact;