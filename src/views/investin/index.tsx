import { InvestinFund } from "../../components/InvestinFund";
import { FC } from "react";

export const InvestinView: FC = ({}) => {
  return (
    <div className='md:hero mx-auto p-4 font-plusJakarta'>
      <div className='md:hero-content flex flex-col'>
        <h1 className='text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]'>
          Investin
        </h1>
        <InvestinFund />
      </div>
    </div>
  );
};
