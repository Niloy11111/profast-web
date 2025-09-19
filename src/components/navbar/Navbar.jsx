import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  return (
    <div className="py-[20px] mt-[32px] rounded-lg px-[32px] customWidth bg-white flex justify-between items-center">
      <div>
        <div className="flex items-end ">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <div className=" ">
            <h3
              className="text-[32px] ml-[-16px] leading-[24px]   font-extrabold text-blackOne
         "
            >
              Profast
            </h3>
          </div>
        </div>
      </div>

      <div>
        <ul className="addFlexItems gap-4 navList">
          <AnchorLink offset="50" href="#services">
            <li className="navIcon">Services</li>
          </AnchorLink>
          <AnchorLink offset="50" href="#coverage">
            <li className="navIcon">Coverage</li>
          </AnchorLink>
          <AnchorLink offset="50" href="#about">
            <li className="navIcon">About Us</li>
          </AnchorLink>
          <AnchorLink offset="50" href="#pricing">
            <li className="navIcon">Pricing</li>
          </AnchorLink>

          <AnchorLink offset="50" href="#beRider">
            <li className="hover:cursor-pointer py-[11px] px-[19px] hover:font-bold bg-p1 text-[#5B6A2E] rounded-full">
              Be a Rider
            </li>
          </AnchorLink>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button className="navSignIn">Sign In</button>
        <div className="flex items-center">
          <button className="navBeRider">Sign Up</button>
          <button className="bg-navArrow rounded-full w-[56px] h-[56px] flex items-center justify-center">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M9.33337 22.6668L22.6667 9.3335"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33337 9.3335H22.6667V22.6668"
                stroke="#CAEB66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
