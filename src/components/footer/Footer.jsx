import logo from "/src/assets/logo.png";
import socialOne from "/src/assets/socials/social-1.svg";
import socialTwo from "/src/assets/socials/social-2.svg";
import socialThree from "/src/assets/socials/social-3.svg";
import socialFour from "/src/assets/socials/social-4.svg";
const Footer = () => {
  return (
    <footer className="bg-footerbg mb-[50px] py-20 rounded-4xl customWidth">
      <div className="flex items-end justify-center">
        <div className="">
          <img src={logo} alt="" />
        </div>

        <div className=" ">
          <h3
            className="text-[32px] ml-[-16px] leading-[24px]   font-extrabold text-white
             "
          >
            Profast
          </h3>
        </div>
      </div>

      <p className="text-borderOne text-center mt-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>

      <div className="mt-8 shortWidth">
        <svg width="100%" height="1.5" className="block">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#03464D"
            strokeWidth="1.5"
            strokeDasharray="8,4"
          />
        </svg>
        <div className=" my-8">
          <ul className="flex footerIcons justify-center gap-9 navList">
            <li>Services</li>
            <li>Coverage</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <svg width="100%" height="1.5" className="block">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="#03464D"
            strokeWidth="1.5"
            strokeDasharray="8,4"
          />
        </svg>
      </div>

      {/*  social icons */}
      <div className="flex justify-center gap-6 mt-8 items-center">
        <div>
          <img loading="lazy" src={socialOne} alt="" />
        </div>
        <div>
          <img loading="lazy" src={socialTwo} alt="" />
        </div>
        <div>
          <img loading="lazy" src={socialThree} alt="" />
        </div>
        <div>
          <img loading="lazy" src={socialFour} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
