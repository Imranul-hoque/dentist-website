import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Loading from "./loading";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <main className="pt-16 flex-1">{children}</main>
    </div>
  );
}
