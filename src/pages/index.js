import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people - Patrick San Juan here...</h1>
    <p>Currently a Software Engineer at Moody's Analytics</p>
    <p>Lover of things tech, bay area sports, and hippity hop + R&B</p>
    <a href='https://github.com/pdotsani'>My github</a><br />
    <a href='https://www.linkedin.com/in/patricksanjuan/'>My linkedin</a><br />
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
