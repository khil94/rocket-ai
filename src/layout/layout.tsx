export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-amber-100">
      <div className="max-w-md mx-auto bg-[#F5F5F5]">{children}</div>
    </div>
  );
}
