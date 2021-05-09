import Head from "next/head"

const Layout = ({children, page}) => {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
            {children}
        </div>
    );
};

export default Layout;