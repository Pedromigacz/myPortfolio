import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = () => {
    const {site: { siteMetadata: { description, title, url, image } }} = useStaticQuery(graphql`
    {
        site {
        siteMetadata {
            description
            title
            url
            image
        }
        }
    }
    `)

    return ( 
        <Helmet
            title={title}
            meta={
                [
                    {
                        name: 'description',
                        content: description,
                    },
                    // Facebook open graph
                    {
                        property: 'fb:app_id',
                        content: '880823279352753',
                    },
                    {
                        property: 'og:type',
                        content: 'website',
                    },
                    {
                        property: 'og:url',
                        content: url,
                    },
                    {
                        property: 'og:title',
                        content: title,
                    },
                    {
                        property: 'og:image',
                        content: image,
                    },
                    {
                        property: 'og:description',
                        content: description,
                    },
                    // Twitter crawler stuff
                    {
                        name: 'twitter:card',
                        content: "summary_large_image",
                    },
                    {
                        name: 'twitter:title',
                        content: title,
                    },
                    {
                        name: 'twitter:description',
                        content: description,
                    },
                    {
                        name: 'twitter:image',
                        content: image,
                    },
                    {
                        name: 'twitter:site',
                        content: '@pedgoshini',
                    },
                    {
                        name: 'twitter:creator',
                        content: '@pedgoshini',
                    },
                    {
                        name: 'twitter:domain',
                        content: 'pedromigacz.com',
                    },
                ]
            }
        />
    )
}
 
export default SEO