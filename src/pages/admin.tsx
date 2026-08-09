import { Script } from 'gatsby'
import React from 'react'

// Decap CMS itself mounts into the page once its script runs — this page
// renders only the scripts that load it, no Layout or other body content.
const AdminPage = () => (
  <>
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />
    <Script id="netlify-identity-redirect">{`
      window.addEventListener('load', function () {
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on('init', (user) => {
            if (!user) {
              window.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/'
              })
            }
          })
        }
      })
    `}</Script>
  </>
)

export const Head = () => (
  <>
    <meta name="robots" content="noindex" />
    <title>Content Manager</title>
  </>
)

export default AdminPage
