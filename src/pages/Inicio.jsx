import CarruselInicio from "../components/CarruselInicio";

const Inicio = () => {
  /**Renderizacion de carrusel de publicidad */
  return (
    <div className="flex flex-col items-center dark:bg-neutral-950">
      <div className="basis-1/2 ">
        <CarruselInicio />
      </div>
      <div className="basis-full w-screen mt-14"></div>
    </div>
  );
};
export default Inicio;
