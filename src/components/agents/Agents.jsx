import FrequentQuestion from "../contentBottom/FrequentQuestion";
import Pricing from "../pricing/Pricing";
import { agents } from "./agent.constants";
import Rider from "./Rider";
import worker from "/src/assets/agent-pending.png";

const Agents = () => {
  return (
    <section className="mb-20">
      {/* How Earning Works */}
      <section className="customWidth  bg-white rounded-4xl flex justify-center items-center py-20 gap-20">
        <div>
          <div className="">
            <img src="/src/assets/tiny-deliveryman.png" alt="" />
          </div>

          <h1 className="mt-4 mainTitle text-left ">How Earning Works</h1>
          <p className="mt-4 text-blackNav ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal <br /> packages to business shipments —
            we deliver on time, every time.
          </p>
          <div id="beRider" className="flex items-center mt-8 ">
            <button className="navBeRider w-[310px] rounded-full">
              Be a Rider
            </button>
            <button className="cursor-pointer bg-navArrow rounded-full w-[56px] h-[56px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M6.33398 14.1668L14.6673 5.8335"
                  stroke="#CAEB66"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.33398 5.8335H14.6673V14.1668"
                  stroke="#CAEB66"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <img src={worker} alt="" />
        </div>
      </section>
      <Rider />

      {/* Our Top Agents */}
      <section className="w-[1283px] mx-auto">
        <h1 className=" mt-[68px] mainTitle">Our Top Agents</h1>
        <p className="commonDescription">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. adipisicing elit.
        </p>

        <div className="grid grid-cols-4 gap-6 mt-12">
          {agents?.map((agent) => (
            <div key={agent?.id} className="bg-white p-4 rounded-2xl">
              <img
                className="h-[303px] w-[270px] rounded-xl"
                src={agent?.img}
                alt=""
              />
              <h4 className="text-[28px] mt-4 font-bold text-workText">
                {agent?.name}
              </h4>

              <div className="flex justify-between items-center mt-2 ">
                <p className="font-medium text-blackNav">{agent?.area}</p>
                <p className=" shortTitle">{agent?.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*       <Pricing /> */}
      <Pricing />

      {/*     <FrequentQuestion /> */}
      <FrequentQuestion />

      {/*  Be a Rider*/}
    </section>
  );
};

export default Agents;
