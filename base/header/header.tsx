import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <div className="flex justify-between items-center px-10 py-4 fixed top-0 left-0 right-0 z-50 bg-transparent w-full">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={135} height={100} />
            </Link>
            <ul className="flex gap-12">
                <li><Link href="/" className="font-playfair text-sm text-white">Home</Link></li>
                <li><Link href="/menu" className="font-playfair text-sm text-white">Menu</Link></li>
                <li><Link href="/about" className="font-playfair text-sm text-white">About</Link></li>
                <li><Link href="/contact" className="font-playfair text-sm text-white">Contact</Link></li>
            </ul>
            <Button>Sign In</Button>
        </div>
    );
}