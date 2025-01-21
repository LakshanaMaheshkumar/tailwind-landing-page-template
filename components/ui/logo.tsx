import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex relative items-center justify-center group"
      aria-label="Visual Nexus"
    >
      <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-gray-300 to-gray-700 group-hover:scale-110 transition-transform duration-300 ease-in-out"></div>
      <img
        src="/images/logo.png"
        alt="Visual Nexus Logo"
        style={{ width: "40px", height: "auto" }}
        className="relative z-10 rounded-full"
      />
    </Link>
  );
}
