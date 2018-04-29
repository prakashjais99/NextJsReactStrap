import React, {Component} from 'react'
import {Button} from 'reactstrap';
import '../style/index.scss';
import Page from '../components/Page';
import Link from 'next/link'

export default class Main extends Component {
    render() {
        return (
            <Page>
                <h3 className="text-primary">Welcome To Bootstrap</h3>
                <Link href="/account">
                    <Button color="danger">Danger!</Button>
                </Link>
            </Page>
        )
    }
}
