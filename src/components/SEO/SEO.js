import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = () => {
    const author = `Pedro H G Migacz`
    const keywords = [`PedroMigacz`, `portfolio`, `web`, `desenvolvimento`, `programador`, `desenvolvedor`, `design`]
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
                    {
                        property: 'og:title',
                        content: title,
                    },
                    {
                        property: 'og:description',
                        content: description,
                    },
                    {
                        property: 'og:type',
                        content: 'website',
                    },
                    {
                        property: 'og:image',
                        content: image,
                    },
                    {
                        property: 'og:url',
                        content: url,
                    },
                    {
                        name: 'twitter:card',
                        content: "summary_large_image",
                    },
                    {
                        name: 'twitter:creator',
                        content: author,
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
                ].concat(
                    keywords && keywords.length > 0 ? {
                        name: 'keywords',
                        content: keywords.join(', ')
                    } : []
                )
            }
        />
    )
}
 
export default SEO