import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

// criação da navbar para o dashboard de admin
const Navbar = () => {
  return (
    <div className="border-b">
      <div className="bg-gray-200 flex h-24 items-center pl-10">
        <div>
          <Image
            src="/eletronix_logo_.png"
            alt="eletronix"
            width={200}
            height={200}
          />
        </div>
        <div>...</div>
        <div className="fixed top-auto right-10">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
