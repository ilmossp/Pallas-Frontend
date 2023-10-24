import { ReactNode } from "react";
import { startCapture, stopCapture } from "../lib/api";
import toast from "react-hot-toast";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const handleStart = () => {
    const res = startCapture();
    if (res) {
      toast.success("Capture Started successfully");
    }
  };

  const handleStop = () => {
    const res = stopCapture();
    if (res) {
      toast.success("Capture Stopped successfully");
    }
  };
  return (
    <div className="h-screen">
      <div className="navbar bg-base">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Pallas</a>
        </div>
        <div className="join">
          <button className="btn join-item" onClick={handleStart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
              className="fill-green-500"
            >
              <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
            </svg>
          </button>
          <button className="btn join-item" onClick={handleStop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
              className="fill-red-500"
            >
              <path d="M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z"></path>
            </svg>
          </button>
        </div>
      </div>{" "}
      {children}
    </div>
  );
};

export default Layout;
