import CircleLoader from "react-spinners/CircleLoader";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-[80vw">
      <div className="sweet-loading">
        <CircleLoader color="#06112A" loading={true} size={150} />
      </div>
    </div>
  );
};

export default Spinner;
