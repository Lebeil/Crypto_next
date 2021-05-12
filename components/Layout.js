import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const Layout = ({children, page}) => {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
            <header className="container-lg">
                <h1 className="text-5xl">Crypto Next</h1>
                <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                    <Link href="/">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Accueil
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            A propos
                        </button>
                    </Link>
                </div>
                <div>
                    <Image
                        src="/mountains.png"
                        alt="mountains pic"
                        width="400"
                        height="25"
                        className="rounded-3xl object-cover"
                        quality={100}
                    />
                </div>
            </header>
            <main className="pt-4 mx-20">{children}</main>
            <footer className="p-10">
                <Image
                    src="/mountains.png"
                    alt="mountains pic"
                    width="1000"
                    height="30"
                    className="rounded-3xl object-cover"
                    quality={100}
                />
                <ul className="pt-10 pb-4 flex justify-around">
                    <li>A propos</li>
                    <li>Qui sommes-nous</li>
                    <li>From scratch - 2021</li>
                </ul>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut dignissimos enim excepturi, expedita fugit id impedit inventore iste odio quae quidem quisquam quos reiciendis tempore velit voluptate voluptatibus voluptatum!</span><span>Adipisci alias consequuntur cupiditate eum facere facilis, hic incidunt ipsa nihil nulla numquam odit omnis quasi quia reprehenderit similique ullam unde! At autem commodi dolor labore molestiae, necessitatibus porro saepe?</span><span>Accusamus alias aliquid aperiam blanditiis commodi consectetur corporis debitis, delectus, dicta dolorem dolores ex facilis fuga illo maxime natus neque pariatur, placeat praesentium quas quasi quo quos ullam unde vel?</span><span>Accusantium alias aliquam deserunt, dignissimos doloremque ducimus ea eaque, eligendi, eveniet ipsum iusto laborum mollitia provident quam rem saepe totam! Consequatur deleniti labore libero molestias nostrum odit porro sapiente unde.</span></p>
            </footer>

            <style jsx>{`
              p{
                color: grey;
              }
            `}</style>
        </div>
    );
};

export default Layout;