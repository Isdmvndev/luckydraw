import loaderStyle from "./loader.module.css";
const Loader = () => {
  return (
    <div className={`${loaderStyle.loader}`}>
    <div className={`${loaderStyle.loadercube}`}>
        <div className={`${loaderStyle.face}`}></div>
        <div className={`${loaderStyle.face}`}></div>
        <div className={`${loaderStyle.face}`}></div>
        <div className={`${loaderStyle.face}`}></div>
        <div className={`${loaderStyle.face}`}></div>
        <div className={`${loaderStyle.face}`}></div>
    </div>
  </div>

  );
};

export default Loader;
