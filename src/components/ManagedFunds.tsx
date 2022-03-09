import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Platform",
    dataIndex: "platform",
    key: "platform",
  },
  {
    title: "Fund Name",
    dataIndex: "fundName",
    key: "fundName",
  },
  {
    title: "Fund Performance",
    dataIndex: "fundPerformance",
    key: "fundPerformance",
  },
  {
    title: "Value of Your Position",
    dataIndex: "positionValue",
    key: "positionValue",
  },
];
// Just test dummy data for now - replace with real data
const dataSource = [
  {
    key: "1",
    platform: "Investin",
    fundName: "Some Fund",
    fundPerformance: "13.24%",
    positionValue: "$1,450.01",
  },
  {
    key: "2",
    platform: "Investin",
    fundName: "Some Other Fund",
    fundPerformance: "1.04%",
    positionValue: "$42,066.04",
  },
];

export const ManagedFunds: React.FC = () => {
  return <Table className='w-full' columns={columns} dataSource={dataSource} />;
};
