import HeaderHiglited from "@/base/header/header-higlited";

export default function WithNavDifferentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderHiglited />
      {children}
    </div>
  );
}