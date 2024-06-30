import 'src/main_app/styles/index.scss';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Filmopoisk</title>
            </head>
            <body>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
}