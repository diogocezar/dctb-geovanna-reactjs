import React, { Component } from 'react'
import DocumentMeta         from 'react-document-meta'
import { MetaTag }          from '../../configs/'
import Menu                 from '../../components/Menu'

class Home extends Component {
	render() {
		return(
			<DocumentMeta {...MetaTag}>
				<Menu/>
			</DocumentMeta>
		)
	}
}

export default Home