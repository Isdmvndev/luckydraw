import loaderStyle from "./loader.module.css";
const Loader = () => {
  return (
    <div className="items-center justify-center h-screen bg-black">
      <div className={`${loaderStyle.loader}`}>
        {/* <div className={`${loaderStyle.cell} ${loaderStyle['d-0']}`}></div> */}
        <div className={`${loaderStyle.cell} ${loaderStyle["d-0"]}`}></div>
        <div className={`${loaderStyle.cell} ${loaderStyle["d-1"]}`}></div>
        <div className={`${loaderStyle.cell} ${loaderStyle["d-2"]}`}></div>

        <div className={`${loaderStyle.cell} ${loaderStyle["d-1"]}`}></div>
        <div className={`${loaderStyle.cell} ${loaderStyle["d-2"]}`}></div>

        <div className={`${loaderStyle.cell} ${loaderStyle["d-2"]}`}></div>
        <div className={`${loaderStyle.cell} ${loaderStyle["d-3"]}`}></div>

        <div className={`${loaderStyle.cell} ${loaderStyle["d-3"]}`}></div>
        <div className={`${loaderStyle.cell} ${loaderStyle["d-4"]}`}></div>
      </div>
    </div>
  );
};

export default Loader;
