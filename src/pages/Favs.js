import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontar tus favoritos'>
        <FavsWithQuery />
    </Layout>    
)