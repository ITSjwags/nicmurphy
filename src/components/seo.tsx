import React from 'react'

type SeoProps = {
  title: string
  description?: string
  keywords?: string[]
}

const Seo = ({ title, description = '', keywords = [] }: SeoProps) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@charleybmurphy" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {keywords.length > 0 && (
      <meta name="keywords" content={keywords.join(', ')} />
    )}
  </>
)

export default Seo
