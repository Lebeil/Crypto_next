import React from 'react';
import Layout from "../components/Layout";

const Currency = ({res})=> {
    console.log(res)
    return (
        <Layout page={"Page " + res.name}>
            <div className="relative hover:shadow-md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
                <div className="text-center">
                    <img
                        src={res.logo_url}
                        alt={res.name}
                        className="w-20 h-20 mx-auto mb-6"
                    />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
                <p>{res.description}</p>
                <p className="pt-5 text-blue-500">
                    <a target="_blank" href={res.reddit_url}>
                        {res.reddit_url}
                    </a>
                </p>
            </div>
        </Layout>
    );
};
export default Currency;

export async function getServerSideProps({query}) {
    console.log(query.currency)
    try {
        const res = await fetch(`https://api.nomics.com/v1/currencies?key=${process.env.API_KEY}&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`);
        const result = await res.json();

        return{
            props: {res: result[0]},
        };
    } catch (err) {
        console.error(err)
    }
}