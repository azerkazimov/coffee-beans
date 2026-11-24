import Button from "@/components/ui/button";
import { Clicker_Script } from "next/font/google";

const clickerScript = Clicker_Script({
    weight: "400",
    subsets: ["latin"],
});

export default function Banner() {
    return (
        <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/coffee_image.png')" }}>
            <div
                className="pointer-events-none absolute inset-0 bg-no-repeat bg-size-[100%_100%]"
                style={{ backgroundImage: "url('/overlay.png')" }}
            />

            <div className="relative z-10 mx-12 flex h-full w-full items-center">
                <div className="flex max-w-xl flex-col items-start gap-6 text-white">
                    <p className="font-playfair text-2xl">We&apos;ve got your morning covered with</p>
                    <h1 className={`${clickerScript.className} text-8xl leading-none md:text-9xl`}>Coffee</h1>
                    <p className="max-w-md font-playfair text-base leading-relaxed">
                        It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
                    </p>
                    <Button>Order Now</Button>
                </div>
            </div>
        </div>
    );
}
