import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
interface Props {}
const Nav: FC<Props> = () => {
  const width = 100;
  const height = 100;
  const router = useRouter();
  return (
    <nav className="container-nav">
      <ul className="ul-nav-element">
        <li className={router.pathname == "/" ? "b-bottom-green" : ""}>
          <Link href="/">
            <Image
              src="/bulbasaur.png"
              alt="Home"
              width={width}
              height={height}
              priority
            />
          </Link>
        </li>
        <li className={router.pathname == "/items" ? "b-bottom-red" : ""}>
          <Link href="/items">
            <Image
              src="/charmander.png"
              alt="Items"
              width={width}
              height={height}
              priority
            />
          </Link>
        </li>
        <li className={router.pathname == "/moves" ? "b-bottom-blue" : ""}>
          <Link href="/moves">
            <Image
              src="/squirtle.png"
              alt="Moves"
              width={width}
              height={height}
              priority
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
