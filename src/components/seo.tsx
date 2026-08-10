import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

type SeoProps = {
  title?: string
  description?: string
  keywords?: string[]
}

type FaviconTag = {
  tagName: 'link' | 'meta'
  attributes: Record<string, string>
}

type GlobalSeoQuery = {
  datoCmsSite: {
    globalSeo: {
      siteName: string | null
      twitterAccount: string | null
      fallbackSeo: {
        title: string | null
        description: string | null
        twitterCard: string | null
      } | null
    } | null
    faviconMetaTags: {
      tags: FaviconTag[]
    }
  }
}

const Seo = ({ title, description, keywords = [] }: SeoProps) => {
  const data = useStaticQuery<GlobalSeoQuery>(graphql`
    query GlobalSeo {
      datoCmsSite {
        globalSeo {
          siteName
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
          }
        }
        faviconMetaTags {
          tags
        }
      }
    }
  `)
  const globalSeo = data.datoCmsSite.globalSeo
  const resolvedTitle = title ?? globalSeo?.fallbackSeo?.title ?? ''
  const resolvedDescription =
    description ?? globalSeo?.fallbackSeo?.description ?? ''
  const twitterCard = globalSeo?.fallbackSeo?.twitterCard ?? 'summary'

  return (
    <>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      {globalSeo?.siteName && (
        <meta property="og:site_name" content={globalSeo.siteName} />
      )}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      {globalSeo?.twitterAccount && (
        <meta name="twitter:site" content={globalSeo.twitterAccount} />
      )}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {data.datoCmsSite.faviconMetaTags.tags.map(({ tagName, attributes }) =>
        tagName === 'link' ? (
          <link key={attributes.href} {...attributes} />
        ) : (
          <meta key={attributes.name ?? attributes.property} {...attributes} />
        )
      )}
    </>
  )
}

export default Seo
