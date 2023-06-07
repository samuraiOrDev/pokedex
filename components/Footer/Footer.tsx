import Image from "next/image";
import React, { FC } from "react";
interface Props {}
const Footer: FC<Props> = () => {
  const width = 100;
  const height = 100;
  return (
    <footer className="container-footer">
      <div>
        <Image
          src="/dratini.png"
          alt="logo dratini"
          width={width}
          height={height}
        />
      </div>
      <p>
        powrered by <span>Samuri.ord.dev &copy;</span>
      </p>
      <div>
        <Image
          src="/snorlax.png"
          alt="logo dratini"
          width={width}
          height={height}
        />
      </div>
    </footer>
  );
};

export { Footer };
