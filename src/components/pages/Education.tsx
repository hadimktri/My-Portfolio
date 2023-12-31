import { RiArrowDropRightLine } from "react-icons/ri";
import Strings from "../../Shared/Strings";
import Animate from "../../utils/Animate";
import S from "../../styles";

export default function Education() {
  return (
    <Animate title="Education" number={2}>
      <div className="flex flex-col gap-8 lg:mr-20">
        {Strings.Education.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div className="flex  items-center">
                <RiArrowDropRightLine size={30} color="#71717a" />
                <h2 className="font-extrabold">{item.title}</h2>
              </div>
              <h2 className={`${S.secondary} ml-8 md:ml-0 lg:mr-8`}>{item.year}</h2>
            </div>
            <h2 className={`${S.secondary} ml-8`}>{item.school}</h2>
          </div>
        ))}
      </div>
      <div id="Projects" className="h-24" />
    </Animate>
  );
}
