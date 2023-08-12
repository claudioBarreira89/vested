import { Spinner } from "./Spinner";

const LoadingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col flex-1">
      <Spinner width="40" height="40" />
    </div>
  );
};

export default LoadingPage;
