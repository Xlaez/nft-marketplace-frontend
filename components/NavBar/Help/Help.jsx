import React from "react";
import Link from "next/link";

import Style from "./Help.module.css";
import { list } from "./list";

const Help = () => {
  return (
    <div className={Style.box}>
      {list.map((el, i) => (
        <div className={Style.help}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Help;
