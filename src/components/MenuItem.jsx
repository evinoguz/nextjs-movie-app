import Link from "next/link";
import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div>
      <Link href={item.url}>{item.name}</Link>
    </div>
  );
};

export default MenuItem;
