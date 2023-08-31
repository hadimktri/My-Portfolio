import { RiArrowDropRightLine } from "react-icons/ri";
import Strings from "../../Shared/Strings";
import Animate from "../anim/Animate";
import Styles from "../../styles";
export default function Experience() {
  return (
    <Animate title="Experience" number={4}>
      <ul className="flex flex-col gap-8 md:gap-16">
        {Strings.Experience.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 ">
            <div className="flex flex-col lg:flex-row ">
              <div className="flex">
                <RiArrowDropRightLine size={25} color="#2dd4bf" />
                <h2 className="text-lg md:text-xl font-extrabold">
                  {item.title}
                </h2>
              </div>
              <h2 className={`${Styles.secondary} ml-8`}>{item.year}</h2>
            </div>
            <h2 className= " mx-8 lg:mx-12">{item.desc}</h2>
            <ul className=" list-disc">
              {item.descList.map((el, i) => (
                <li className={`${Styles.secondary}  mx-5 md:mx-12 mb-4`} key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <div id="Contact" className="h-24" />
    </Animate>
  );
}
