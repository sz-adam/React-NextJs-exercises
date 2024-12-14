import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

type Props = {};

const MobileButton = (props: Props) => {
  return (
    <div className="flex w-full justify-evenly items-center mt-2 md:hidden">
      <button className="rounded-2xl bg-gray-800 px-6  py-1.5 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]">
        <FaArrowLeft />
      </button>
      <button className="rounded-2xl bg-gray-800 px-6  py-1.5 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]">
        <FaRotate />
      </button>
      <button className="rounded-2xl bg-gray-800 px-6  py-1.5 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]">
        <FaArrowDownLong />
      </button>
      <button className="rounded-2xl bg-gray-800 px-6  py-1.5 text-sm text-white shadow-lg shadow-neutral-500/20 transition active:scale-[.95]">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default MobileButton;
