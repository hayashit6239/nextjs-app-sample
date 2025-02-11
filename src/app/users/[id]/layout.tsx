export default function UserPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="px-28 py-8">{children}</div>;
}
