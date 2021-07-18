import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="home" icon={HomeIcon} />
        <HeaderItem title="trending" icon={LightningBoltIcon} />
        <HeaderItem title="verified" icon={BadgeCheckIcon} />
        <HeaderItem title="collections" icon={CollectionIcon} />
        <HeaderItem title="search" icon={SearchIcon} />
        <HeaderItem title="account" icon={UserIcon} />
      </div>
      <div>
        <Image
          className="object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png"
          width={200}
          height={48}
          alt="hulu logo"
        />
      </div>
    </header>
  );
}

export default Header;
