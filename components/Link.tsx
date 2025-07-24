import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  go: string;
  content: ReactNode;
  className?: string;
};

export default function Button({ go, content, className = "" }: ButtonProps) {
  return (
    <Link
      href={go}
      className={className}
      target="_blank"
      rel="noopener noreferrer" 
    >
      {content}
    </Link>
  );
}
