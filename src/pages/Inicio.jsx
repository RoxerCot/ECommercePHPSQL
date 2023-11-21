import CarruselInicio from "../components/CarruselInicio";

const Inicio = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="basis-1/2 ">
        <CarruselInicio />
      </div>
      <div className="basis-full w-screen mt-14"></div>
    </div>
  );
};
export default Inicio;
