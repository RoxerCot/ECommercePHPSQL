import { Carousel } from "flowbite-react";

const CarruselInicio = () => {
  const customTheme = {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600/30 group-hover:bg-sky-950/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-96 gap-x-8 mt-12">
      <Carousel theme={customTheme} className="w-4/5" slide={false}>
        <img
          alt=""
          src="/images/Promocion_3.jpg"
          className="object-scale-down h-96 w-screen"
        />
        <img
          alt=""
          src="/images/Promocion_1.jpg"
          className=" object-scale-down h-96 w-screen"
        />
        <img
          alt=""
          src="/images/Promocion_2.jpg"
          className=" object-scale-down h-96 w-screen"
        />
        <img
          alt=""
          src="/images/Promocion_4.jpg"
          className="object-scale-down h-96 w-screen"
        />
      </Carousel>
    </div>
  );
};
export default CarruselInicio;
