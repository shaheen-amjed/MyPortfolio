import Link from "next/link";

type ButtonProps = {
  go: string;
  content: string;
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
