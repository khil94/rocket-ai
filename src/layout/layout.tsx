export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-amber-100 overflow-hidden">
      <div className="max-w-md mx-auto text-black bg-[#F5F5F5]">{children}</div>
    </div>
  );
}
