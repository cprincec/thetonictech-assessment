import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openSans = localFont({
    // src: "./fonts/GeistVF.woff",
    src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const openSansItalic = localFont({
    src: "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Home | Boldo",
    description: "Save time by building  fast with Boldo Template.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${openSans.variable} ${openSansItalic.variable} antialiased`}>{children}</body>
        </html>
    );
}
