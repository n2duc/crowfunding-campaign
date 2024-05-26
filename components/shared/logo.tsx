import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/Logo.svg"
      alt="Logo"
      width={52}
      className={className}
      height={52}
      priority
    />
  );
};

export default Logo;