import '../styles/globals.css';  // Import global CSS or Tailwind CSS
import Navbar from '../components/Navbar'; // Import Navbar component


export const metadata = {
  title: 'Test Assignment', // Title of the page for metadata
  description: 'Next.js App with Tailwind CSS', // Description of the app
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={"urbanist lg:px-[75px] bg-[#181818] text-white"}>

        <Navbar />  {/* Navbar component */}
        <main>{children}</main>  {/* Main content */}

      </body>
    </html>
  );
}
