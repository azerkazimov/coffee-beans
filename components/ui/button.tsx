interface ButtonProps {
    children: React.ReactNode;

}

export default function Button({ children }: ButtonProps) {
    return (
        <button className="bg-[#F9C06A] text-[#1e1e1e] px-4 py-2 rounded-full font-playfair text-sm">{children}</button>
    );
}