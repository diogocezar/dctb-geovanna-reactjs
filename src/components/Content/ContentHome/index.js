import React, { Component, Fragment } from 'react'
import Button from '../../Button'

class ContentHome extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="sr-1">O grande momento está chegando?</h2>
                <h3 className="sr-2">Vocês vão se casar? Não se preocupe!</h3>
                <h4 className="sr-3">Sou a <span className="hl">Geovanna Garcia</span>,</h4>
                <h4 className="sr-3">Estou aqui para lhe ajudar</h4>
                <Button 
                    id="btn-contact"
                    label="ENTRE EM CONTATO"
                    type="transparent"
                    sr="sr-2"
                    action="goto-contact">
                </Button>
            </Fragment>
        );
    }
}

export default ContentHome