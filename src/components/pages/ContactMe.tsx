import { TbBrandGithub, TbBrandLinkedin, TbHomeUp } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import Animate from "../../utils/Animate";
import S from "../../styles";

export default function ContactMe() {
  return (
    <Animate title="Contact Me" number={5}>
      <div className="text-base flex flex-col gap-6 lg:mr-20">
        <a
          className=" hover:scale-110  flex  gap-2 w-fit"
          href="mailto:hadimokhtr@gmail.com"
          target="_blank"
        >
          <MdOutlineMail size={25} />
          <h2 className={S.secondary}>
            Email: hadimokhtr@gmail.com{" "}
          </h2>
        </a>
        <a
          className=" hover:scale-110 flex gap-2 w-fit"
          href="https://github.com/hadimktri/"
          target="_blank"
        >
          <TbBrandGithub size={25} />
          <h2 className={S.secondary}>
            Github: https://github.com/hadimktri{" "}
          </h2>
        </a>
        <a
          className=" hover:scale-110  flex gap-2 w-fit"
          href="https://www.linkedin.com/in/hadimokhtari/"
          target="_blank"
        >
          <TbBrandLinkedin size={25} />
          <h2 className={S.secondary}>
            Linkedin: www.linkedin.com/in/hadimokhtari
          </h2>
        </a>
      </div>
      <div className="grid place-content-center my-8 md:my-16">
        <a href="#Home" className="hover:scale-125">
          <TbHomeUp size={25} />
        </a>
      </div>
    </Animate>
  );
}
