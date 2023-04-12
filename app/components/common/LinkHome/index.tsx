import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

export function LinkHome({ children }: { children: any }) {
  return (
    <Link to="/" className="flex text-sm hover:text-white/50 transition-colors">
      <ArrowSmallLeftIcon className="w-5 mr-1" />
      {children}
    </Link>
  );
}
