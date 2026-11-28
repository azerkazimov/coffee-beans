export default function WithoutNavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>WithoutNavLayout</h1>
      {children}
    </div>
  );
}