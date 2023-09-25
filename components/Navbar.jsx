"use client";
import { getProviders, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const provider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    provider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={"/assets/images/logo.svg"} alt="Site Logo" width={30} height={30} className="object-contain" />
        <p className="logo_text">Company Name</p>
      </Link>

      <div className="sm:flex hidden">
        {userLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={() => signOut()} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile" className="">
              <Image
                src="/assets/images/logo.svg"
                alt="Profile Image"
                height={37}
                width={37}
                className="object-contain"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button key={provider.name} type="button" onClick={() => signIn(provider.id)} className="black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {userLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="Profile Image"
              height={37}
              width={37}
              className="object-contain"
              onClick={() => {
                setToggleDropdown((prevState) => !prevState);
              }}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}>
                  My Profile
                </Link>
                <Link
                  href="/create"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button key={provider.name} type="button" onClick={() => signIn(provider.id)} className="black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
