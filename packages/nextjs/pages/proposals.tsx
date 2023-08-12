import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Page: NextPage = () => {
  const Proposals = dynamic(() => import("~~/components/Proposals").then(res => res.default), {
    ssr: false,
  });

  return (
    <>
      <MetaHeader />
      <Proposals />
    </>
  );
};

export default Page;
