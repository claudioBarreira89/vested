import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Page: NextPage = () => {
  const Mint = dynamic(() => import("~~/components/Mint").then(res => res.default), {
    ssr: false,
  });

  return (
    <>
      <MetaHeader />
      <Mint />
    </>
  );
};

export default Page;
