import Hero from "@/app/components/Hero";
import Sheet from "@/app/components/Sheet";

export const metadata = {
    title: "お問い合わせ"
  };

type Props = {
    children: React.ReactNode;
};

export default function RootLayout ({children}: Props) {
    return (
        <>
        <Hero title="Contact" sub="お問い合わせ"/>
        <Sheet>{children}</Sheet>
        </>
    );
}