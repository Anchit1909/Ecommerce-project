import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  // const session = false;
  const { data: session } = useSession();
  const item = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            {/* <Image
              src="/apple_logo.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Header Image"
            /> */}
            <h1 className="text-black text-3xl font-poppins font-semibold">
              Aurius
            </h1>
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex font-poppins">
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Product
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Explore
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Support
        </a>
        <a className="cursor-pointer opacity-75 transition hover:opacity-100">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        {/* <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" /> */}
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {item.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {item.length}
              </span>
            )}
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="user image"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100"
            onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
