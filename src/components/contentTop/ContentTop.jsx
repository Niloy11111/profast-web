import { motion } from "framer-motion";
import Extension from "./Extension";
import { industries } from "./industry.constants";
import { priorities } from "./priorities.constants";
import { services } from "./services.constants";
import { works } from "./works.constants.";
import merchant from "/src/assets/be-a-merchant-bg.png";
import amazon from "/src/assets/brands/amazon.png";
import casio from "/src/assets/brands/casio.png";
import moonstar from "/src/assets/brands/moonstar.png";
import randstad from "/src/assets/brands/randstad.png";
import startPeople from "/src/assets/brands/start-people 1.png";
import start from "/src/assets/brands/start.png";
const ContentTop = () => {
  return (
    <section className="mt-[60px] ">
      {/*  Integrated with the apps you love*/}
      {/* <section className="shortWidth py-16 text-white bg-workText rounded-4xl">
        <div>
          <h1 className="mainTitle text-white">
            Integrated with the apps you love
          </h1>
          <p className="commonDescription text-white">
            Stay connected with 10+ third-party integrations including Google
            Calendar, Zapier, Stripe, <br /> RentRange, QuickBooks Online,
            Tenant Turner, and more.{" "}
          </p>

          <img className="w-[800px] mx-auto" src={apps} alt="" />
        </div>
      </section> */}

      {/* <section>
        <h1>
          Plus, everything else you’d expect on our highly <br /> rated platform
        </h1>
      </section> */}

      {/* works */}
      <section className="mb-[100px] shortWidth">
        <h1 className="text-workText mb-8 text-[32px] font-extrabold">
          How it Works
        </h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-4 gap-6"
        >
          {works?.map((work) => (
            <motion.div
              key={work?.id}
              className="p-8 rounded-3xl "
              style={{ backgroundColor: work?.workBg }}
            >
              <div
                className={`${
                  work?.id !== 3
                    ? "bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC00]"
                    : "bg-white"
                }   rounded-sm max-w-max p-3`}
              >
                <img
                  loading="lazy"
                  className="w-14 h-14 "
                  src={work?.img}
                  alt=""
                />
              </div>
              <h3
                className={`${
                  work?.id === 3 ? "text-white" : ""
                }  text-[20px] mt-4 font-bold `}
              >
                {work?.title}
              </h3>
              <p
                className={`${
                  work?.id === 3 ? "text-white" : ""
                }    font-medium  mt-4`}
              >
                {work?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* services */}

      <section
        id="services"
        className=" bg-workText rounded-4xl customWidth    py-[100px] px-[160px]  "
      >
        <h1 className="text-center text-white   text-[40px] font-extrabold ">
          Our Services
        </h1>

        <p className=" mb-8 mt-4 text-borderOne font-medium text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 gap-6"
        >
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`${
                service?.id === 2 ? "bg-p1" : "bg-white"
              } p-8  rounded-3xl hover:bg-p1 transition-all duration-300`}
            >
              <div className="bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC00] w-[88px] h-[88px] flex justify-center items-center  rounded-full mx-auto">
                <img
                  loading="lazy"
                  className={`  w-10 h-10`}
                  src={service?.img}
                  alt="sdf"
                />
              </div>
              <h3 className="px-4 text-center text-[24px] mt-4 font-bold text-workText">
                {service?.title}
              </h3>
              <p className="text-center font-medium text-workDesc mt-4">
                {service?.description}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* We've helped thousands of sales teams */}
      <section className="mt-[100px] shortWidth">
        <h1
          className="mb-[40px] text-workText font-extrabold text-[28px] text-center
        "
        >
          We've helped thousands of sales teams
        </h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-between w-full
          pb-[102px] "
        >
          <div>
            <img loading="lazy" src={casio} alt="Casio" />
          </div>
          <div>
            <img loading="lazy" src={amazon} alt="Amazon" />
          </div>
          <div>
            <img loading="lazy" src={moonstar} alt="Moonstar" />
          </div>
          <div>
            <img loading="lazy" src={start} alt="Start" />
          </div>
          <div>
            <img loading="lazy" src={startPeople} alt="Start People" />
          </div>
          <div>
            <img loading="lazy" src={randstad} alt="Randstad" />
          </div>
        </motion.div>

        <div className="mb-[80px]">
          <svg width="100%" height="1" className="block">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#03464D"
              strokeWidth="1"
              strokeDasharray="8,4"
            />
          </svg>
        </div>
      </section>

      {/* Live Parcel Tracking*/}
      <section className=" shortWidth">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 w-full
          "
        >
          {priorities?.map((priority) => (
            <div
              key={priority?.id}
              className="bg-white rounded-3xl flex gap-12 p-8"
            >
              <div className="flex gap-12">
                <div>
                  <img
                    loading="lazy"
                    className={`${
                      priority?.id === 3 ? " w-[150px]" : ""
                    } border`}
                    src={priority?.img}
                    alt=""
                  />
                </div>
                <div className="">
                  <svg width="1" height="100%" className="block">
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="100%"
                      stroke="#03464D"
                      strokeWidth="1"
                      strokeDasharray="8,4"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-[24px]  mt-4 font-bold text-workText">
                  {priority?.title}
                </h3>
                <p className=" font-medium text-workDesc mt-4">
                  {priority?.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pt-[80px] mb-[80px]">
          <svg width="100%" height="1" className="block">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#03464D"
              strokeWidth="1"
              strokeDasharray="8,4"
            />
          </svg>
        </div>
      </section>

      {/* Merchant and Customer Satisfaction */}

      <section className="shortWidth ">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative bg-workText rounded-4xl w-full p-20 flex justify-between gap-[73px]
          "
        >
          <div className="absolute top-0">
            <img loading="lazy" src={merchant} alt="" />
          </div>
          <div className="w-[673px]">
            <h1 className="text-[40px] font-extrabold text-white">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="text-borderOne mt-4">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="text-[20px] cursor-pointer rounded-full bg-p1 font-bold py-4 px-8 text-navArrow">
                Become a Merchant
              </button>
              <button className="text-[20px] cursor-pointer rounded-full text-p1 border-p1 border font-bold py-4 px-8 ">
                Earn with Profast Courier
              </button>
            </div>
          </div>

          <div className="absolute right-[46px]">
            <img
              loading="lazy"
              className=""
              src="/src/assets/location-merchant.png"
              alt=""
            />
          </div>
        </motion.div>
      </section>

      {/* Extension */}
      <Extension />

      {/* Pick your industry and streamline your business workflow */}

      <section id="coverage" className="mt-20 shortWidth">
        <h1 className="mainTitle ">
          Pick your industry and streamline your busines
        </h1>

        <p className=" mb-8 commonDescription">
          WooDelivery is perfect for Lorem ipsum dolor sit amet consectetur
          adipisicing <br /> elit. At, omnis!
        </p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-4 gap-6 "
        >
          {industries?.map((industry) => (
            <div
              key={industry?.id}
              className="bg-white border transition-all duration-200 border-background hover:border-deepBlue cursor-pointer hover:shadow p-4 rounded-[10px] flex items-center gap-4"
            >
              <div>
                <img
                  loading="lazy"
                  className="w-[50px] h-[50px]"
                  src={industry?.img}
                  alt=""
                />
              </div>
              <div>
                {" "}
                <h3 className="hover:text-deepBlue shortTitle  ">
                  {industry?.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Ready to wow your customers? */}
      <section className="bg-workText shortWidth px-20 rounded-4xl my-20 ">
        <div className="flex  justify-between items-center py-20">
          <div className=" ">
            <h1 className="mainTitle mt-0 text-left text-white ">
              Ready to wow your customers?
            </h1>
            <p
              className="text-white text-lg
        "
            >
              New customers will get 14 days free trial. No credit card
              required, no hidden charge.
            </p>
          </div>

          <div className="">
            <button className="btnRegular  cursor-pointer px-8 py-4 hover:shadow-lg border border-p1">
              Get Starter With Free
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContentTop;
