import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BugAntIcon, CurrencyDollarIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref className={`${isActive ? "bg-purple-500" : ""}`}>
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink href="/debug">
          <BugAntIcon className="h-4 w-4" />
          Debug Contracts
        </NavLink>
      </li>
      <li>
        <NavLink href="/example-ui">
          <SparklesIcon className="h-4 w-4" />
          Example UI
        </NavLink>
      </li>
      <li>
        <NavLink href="/blockexplorer">
          <MagnifyingGlassIcon className="h-4 w-4" />
          Block Explorer
        </NavLink>
      </li>
      <li>
        <NavLink href="/vesting">
          <CurrencyDollarIcon className="h-4 w-4" />
          Vesting
        </NavLink>
      </li>
      <li>
        <NavLink href="/proposals">
          <MagnifyingGlassIcon className="h-4 w-4" />
          Proposals
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink href="/">
          <span className="btn btn-ghost normal-case text-xl ">VESTED</span>
        </NavLink>
      </div>
      <div className="navbar-end">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
