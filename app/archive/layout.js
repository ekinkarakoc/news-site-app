import Link from "next/link";
import React from "react";

const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <div className="header-wrapper">
        <Link href={"/archive"} className="archive-heading">
          News Archive
        </Link>
      </div>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
