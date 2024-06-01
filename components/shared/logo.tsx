import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={52}
        className={className}
        height={52}
        priority
      />
    </Link>
  );
};

export default Logo;