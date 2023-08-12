import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import Protected from "~~/components/Protected";

const Page: NextPage = () => {
  const Vesting = dynamic(() => import("~~/components/Vesting").then(res => res.default), {
    ssr: false,
  });

  return (
    <>
      <MetaHeader />
      <Protected>
        <Vesting />
      </Protected>
    </>
  );
};

export default Page;
