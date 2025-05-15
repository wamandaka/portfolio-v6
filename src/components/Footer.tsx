// import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-[#191919] px-4 md:px-10 lg:px-72 py-10 text-center"
      >
        {/* <div className="flex items-center justify-center gap-2">
          <CiMail size={20} />
        </div> */}
        <div className="flex items-center justify-center gap-7 mt-3">
          <a
            href="https://github.com/wamandaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/kang_piscokk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/wamandaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          {/* <a
            href="https://x.com/kang_piscokk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={30} />
          </a> */}
        </div>
      </section>
    </>
  );
};

export default Footer;
