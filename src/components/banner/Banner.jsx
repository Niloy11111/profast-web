import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import banner1 from "/src/assets/banner/banner1.png";
import banner2 from "/src/assets/banner/banner2.png";
import banner3 from "/src/assets/banner/banner3.png";

const banners = [banner1, banner2, banner3];

const Banner = () => {
  return (
    <div className="customWidth mt-[60px]  relative">
      <Carousel className="w-full ">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="">
                <img src={banner} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-navArrow cursor-pointer ml-[50px]     text-p1" />
        <CarouselNext className="cursor-pointer mr-[50px]  bg-[#03464D]  font-bold   text-white" />
      </Carousel>
    </div>
  );
};

export default Banner;
