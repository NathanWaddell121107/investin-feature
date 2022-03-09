import React from "react";
import { ManagedFunds } from "../../components/ManagedFunds";

export const InvestinView: React.FC = ({}) => {
  return (
    <div className='md:hero mx-auto p-4 font-plusJakarta'>
      <div className='md:hero-content w-full flex flex-col'>
        <h1 className='text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]'>
          Investin
        </h1>
        <ManagedFunds />
      </div>
    </div>
  );
};
