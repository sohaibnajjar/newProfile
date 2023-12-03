import Image from "next/image";
import attack from "../../public/attack.png";
import {
  FaHtml5,
  FaLinkedin,
  FaDiscord,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { RiJavascriptFill, RiFlutterFill } from "react-icons/ri";

const Home = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col gap-16 w-[900px] pt-10">
        <div
          className=" bg-cover h-60 bg-[url('../../public/bg.jpg')] bg-repeat-x bg-top rounded-lg"
          style={{
            animation: "scrollForever 20s linear infinite",
          }}
        >
          <div className="h-full flex items-center justify-evenly relative overflow-hidden ">
            <h1 className="text-5xl duration-200 hover:text-7xl">sohaib</h1>
            <Image src={attack} alt="attack" width={120} height={120} />
          </div>
        </div>
        <div className="h-44 bg-[#8866ee] rounded-lg flex flex-col justify-between">
          <div className="h-full flex justify-center items-center">
            <h2 className="text-2xl">I build frontend for web applications.</h2>
          </div>
          <div className="bg-[#6644cc] p-3 rounded-b-lg flex gap-2 justify-evenly items-center">
            <a title="Linked In" href="mailto:sohaib.najar@gmail.com">
              <MdMailOutline fontSize={40} />
            </a>
            <a
              title="Linked In"
              href="https://www.linkedin.com/in/sohaib-najjar-76914717a/"
              target="_blank"
            >
              <FaLinkedin fontSize={40} />
            </a>
            <a
              title="Linked In"
              href="https://discord.com/users/977852503070740490"
              target="_blank"
            >
              <FaDiscord fontSize={40} />
            </a>
          </div>
        </div>
        <div className="bg-[#44aadd] h-44 rounded-lg flex flex-col justify-between">
          <div className="h-full flex justify-center items-center">
            <h2 className="text-2xl">Skills</h2>
          </div>
          <div className="bg-[#2299bb] p-3 rounded-b-lg flex gap-2 justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <FaHtml5 fontSize={40} />
              <p>HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaCss3Alt fontSize={40} />
              <p>CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <RiJavascriptFill fontSize={40} />
              <p>JS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaReact fontSize={40} />
              <p>React Js</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <RiFlutterFill fontSize={40} />
              <p>Flutter</p>
            </div>
          </div>
        </div>
        <div className="bg-[#ed1221] h-44 rounded-lg flex flex-col justify-between">
          <div className="h-full flex justify-center items-center">
            <h2 className="text-2xl">Projects</h2>
          </div>
          <div className="bg-[#b10011] p-3 rounded-b-lg flex justify-center items-center">
            This Section is Not Ready Yet
          </div>
        </div>
        <div className="bg-[#19162e] h-20 rounded-t-lg flex flex-col justify-between">
          <div className="h-full flex justify-center items-center">
            <h2 className="text-2xl">built by sohaib</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
