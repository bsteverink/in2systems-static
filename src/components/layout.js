import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'MICRONS, We help make information technology work for all modern businesses.' },
            { name: 'keywords', content: 'python, javascript, micro service, data' },
            { name: 'robots', content: 'noindex,nofollow'}
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
