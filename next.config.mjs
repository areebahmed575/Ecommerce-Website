/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: "https",
            //     hostname: "full-stack-ecommerce-website-xflrttpae-areebahmed575.vercel.app",
            //     port: "",
            //     pathname: "/**",
            // },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "istockphoto-1337144146-612x612.jpg",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],

    }
}

export default nextConfig;
