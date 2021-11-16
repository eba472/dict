import { Menu } from 'antd'
import { useState } from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import ComingSoon from 'app/otherPages/comingSoon'

const HorizontalNavBar: () => JSX.Element = () => {
    const [Current, setCurrent] = useState<string>()
    function handleClick(e: { key: string }) {
        console.log('click ', e, e.key)
        setCurrent(e.key)
    }
    return (
        <Router>
            <Menu onClick={handleClick} selectedKeys={[Current ? Current : '']} mode="horizontal" >
                <Menu.Item key="translation" icon={<MailOutlined />}>
                    <Link to="/en-mon">En-Mon Translation</Link>
                </Menu.Item>
                <Menu.Item key="flashcards" icon={<AppstoreOutlined />}>
                    ssss
                    <Route exact path="/flashcards" component={ComingSoon}>
                        {/* <Link to="/flashcards">Flashcards</Link> */}
                    </Route>
                </Menu.Item>
            </Menu>
        </Router>
    )
}

export default HorizontalNavBar