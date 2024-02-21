import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-orange-300 py-4 text-center rounded-xl">
      <div className="flex flex-col items-center">
        <p className="text-black mb-4">
          © 2024 by EduMMoreno. Todos los derechos reservados.
        </p>
        <div className="flex justify-center items-center">
          <Link className="text-black hover:text-blue-900 mr-4" href="https://github.com/EduMMorenolp" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="mr-1" />
            <span className="text-xs">GitHub</span>
          </Link>
          <Link className="text-blue-500 hover:text-blue-900" href="https://www.linkedin.com/in/eduardo-m-moreno-programador/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
            <span className="text-xs">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
