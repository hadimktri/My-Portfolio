import { IoArrowForwardOutline } from "react-icons/io5";
export default function Experience() {
  const servicesList = [
    {
      id: 1,
      title: "FRONTED DEV",
      desc: "Elevate your online presence with captivating user interfaces and seamless experiences",
      logo: "/design.png",
    },
    {
      id: 2,
      title: "BACKEND DEV",
      desc: "Developing application backend and Server side development using various backend technology",
      logo: "/backend.png",
    },
    {
      id: 3,
      title: "ONLINE TEACHING",
      desc: "Teaching programming and coding on various platform like Youtube, Udemy etc. Free Course to the student",
      logo: "/teaching.png",
    },
  ];
  return (
    <div className="pl-20 my-20 flex flex-col items-center w-full">
      <div className="flex items-center justify-start w-full">
        <h2 className="text-xl text-gray-300">
          <span className="text-teal-400 text-md tracking-widest">04-</span>
          Experience
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-40 m-3 mb-1"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2"></div>
      </div>
      <div className="flex justify-around mt-16">
        {servicesList.map((item) => (
          <div
            className="text-center flex flex-col justify-center items-center
                gap-6"
          >
            <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
              <img
                src={item.logo}
                className="w-[80px] h-[80px]
                        p-5 hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <h2 className="text-gray-400">{item.desc}</h2>
            <IoArrowForwardOutline
              className="bg-green-500 text-[35px]
                    p-2 text-white rounded-full cursor-pointer hover:scale-110
                    transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
