import Link from "next/link";

type ButtonProps = {
  go:string;
  content:string;
};

export default function Button({ go, content }: ButtonProps) {
  return <Link href={`${go}`} target="__blank" >{content}</Link>
}
