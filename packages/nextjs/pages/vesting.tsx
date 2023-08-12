import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Page: NextPage = () => {
  const Vesting = dynamic(() => import("~~/components/Vesting").then(res => res.default), {
    ssr: false,
  });

  return (
    <>
      <MetaHeader />
      <Vesting />
    </>
  );
};

export default Page;
