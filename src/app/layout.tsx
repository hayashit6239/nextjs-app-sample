import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
// import { Button, Flex, Text } from "@mantine/core";
// import Link from "next/link";
// import { FC } from "react";
import { AuthContextProvider } from "@/common/contexts/authContexts";
import { Header } from "@/components/layouts/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="jp">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <MantineProvider>
                    <AuthContextProvider>
                        <Header />
                        <div className="pt-[80px]">{children}</div>
                    </AuthContextProvider>
                </MantineProvider>
            </body>
        </html>
    );
}

// const Header2: FC = () => {
//     return (
//         <Flex
//             direction="row"
//             className="fixed bg-gray-950 bg-gradient-to-b from-gray-950 to-gray-900 w-full h-[80px] px-6 py-8 place-content-between items-center"
//         >
//             <Flex direction="row" className="space-x-3 items-center">
//                 <Link href="/home">
//                     <Text className="text-red-700 font-bold text-2xl">NextjsAppRouter</Text>
//                 </Link>
//                 <Link href="/search">
//                     <Text className="text-sm">すべて</Text>
//                 </Link>
//                 <Link href="/search?category=clothes">
//                     <Text className="text-sm">トップス</Text>
//                 </Link>
//                 <Link href="/search?category=book">
//                     <Text className="text-sm">本</Text>
//                 </Link>
//                 <Link href="/search?category=shoes">
//                     <Text className="text-sm">シューズ</Text>
//                 </Link>
//             </Flex>
//             <Flex>
//                 <Button className="font-bold" variant="filled" color="yellow">
//                     出品
//                 </Button>
//             </Flex>
//         </Flex>
//     );
// };
