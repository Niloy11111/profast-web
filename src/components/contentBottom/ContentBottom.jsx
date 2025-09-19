import { useState } from "react";
import { testimonials } from "./customers.constants";
import customerTop from "/src/assets/customer-top.png";
import arrowleft from "/src/assets/customers/arrow-left.svg";
import arrowright from "/src/assets/customers/arrow-right.svg";
import ellipseTwo from "/src/assets/customers/Ellipse 2.svg";
import ellipseSix from "/src/assets/customers/Ellipse 6.svg";
import reviewQuote from "/src/assets/reviewQuote.png";
const ContentBottom = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // start from first item

  const totalItems = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get 5 items for visible window
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(testimonials[(currentIndex + i) % totalItems]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="mt-[100px]">
      <div className="max-w-max mx-auto">
        <img src={customerTop} alt="" />
      </div>
      {/* What our customers are sayings */}
      <div>
        <h1 className="mainTitle">What our customers are sayings</h1>
        <p className="commonDescription">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>

        <div
          className="mt-10 grid grid-cols-5 gap-6 mx-[-260px] transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${(100 / 5) * 0}%)`,
          }}
        >
          {visibleTestimonials.map((testimonial, idx) => (
            <div
              key={testimonial?.id}
              className={`p-8 bg-white rounded-3xl transition-all duration-500 ${
                idx === 2 ? "max-h-max opacity-100 " : "mt-[50px] opacity-30"
              }`}
            >
              <img src={reviewQuote} alt="" />

              <p className="mt-2 font-medium text-workDesc">
                A posture corrector works by providing support and gentle
                alignment to your shoulders, back, and spine, encouraging you to
                maintain proper posture throughout the day.
              </p>

              <div className="mt-6">
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

              <div className="flex gap-4 mt-6">
                <div>
                  <img
                    className="w-[48px] h-[48px] rounded-full"
                    src={testimonial?.customerImage}
                    alt=""
                  />
                </div>

                <div>
                  <h4 className="text-[20px] font-extrabold text-workText">
                    {testimonial?.customerName}
                  </h4>
                  <h4 className="mt2 text-workDesc font-medium">
                    {testimonial?.customerRole}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[128px]  mt-[-20px] flex gap-8 items-center justify-center">
          <div
            className="w-10 h-10 hover:shadow-lg cursor-pointer rounded-full bg-white flex justify-center items-center hover:bg-gray-50 transition-colors "
            onClick={prevSlide}
          >
            <img src={arrowleft} alt="" />
          </div>

          <div className="flex gap-2 items-center">
            {testimonials?.map((_, idx) => (
              <img
                key={idx}
                src={idx === currentIndex ? ellipseTwo : ellipseSix}
                alt=""
                className="cursor-pointer"
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>

          <div
            className="w-10 rounded-full cursor-pointer h-10  hover:shadow-lg bg-p1 flex justify-center items-center hover:opacity-80 transition-opacity"
            onClick={nextSlide}
          >
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBottom;
