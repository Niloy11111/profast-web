import { motion } from "framer-motion";
import Lottie from "lottie-react";
import RiderForm from "./RiderForm";
import rider from "/src/animations/rider.json";
const Rider = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="customWidth mt-20 py-20 px-[102px] rounded-4xl bg-white "
    >
      <h1 className="mainTitle text-left">Be a Rider</h1>
      <p className="text-blackNav mt-4 pb-[50px] ">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br /> packages to business shipments — we deliver
        on time, every time.
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1282"
        height="2"
        viewBox="0 0 1282 2"
        fill="none"
      >
        <path d="M0 1H1282" stroke="black" strokeOpacity="0.1" />
      </svg>

      {/*  */}
      <div className="flex justify-between items-end">
        <div className="mt-[50px] ">
          <h1 className="text-[28px] font-extrabold text-workText mb-5">
            Tell us about yourself
          </h1>

          <RiderForm />
        </div>

        <div className="-mb-14">
          {/* <img className="" src="/src/animations/rider.json" alt="" /> */}
          <Lottie animationData={rider} loop={true} />;
        </div>
      </div>
    </motion.div>
  );
};

export default Rider;
