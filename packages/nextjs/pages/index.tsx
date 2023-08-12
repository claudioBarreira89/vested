import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Page: NextPage = () => {
  const Home = dynamic(() => import("~~/components/Home").then(res => res.default), {
    ssr: false,
  });

  return (
    <>
      <MetaHeader />
      <Home />
    </>
  );
};

export default Page;
