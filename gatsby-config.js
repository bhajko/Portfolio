module.exports = {
    siteMetadata: {
        title: 'Portfolio',
        author: 'Balázs Hajkó',
        email: 'bhajko@gmail.com'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: 'images',
        //         path: path.join(__dirname, 'src', 'images')
        //     }
        // }
    ]
}