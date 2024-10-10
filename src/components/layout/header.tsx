'use client'
import { Menu, Layout, Button } from 'antd'
import React from 'react'
import logo from "@/assets/images/eco-mama.png"
import Image from 'next/image';

const { Header } = Layout;

const items = [{
    key: 1,
    label: `Home`,
},
{
    key: 2,
    label: `About`,
},
{
    key: 3,
    label: `Services`,
},
{
    key: 4,
    label: `Hubs`,
},
{
    key: 5,
    label: `Blogs`,
},
]
    ;
function NavHeader() {
    return (
        <Header style={{ display: 'flex', background: '#fff', justifyContent: "space-between", alignItems: "center", marginTop: 20, padding: 0 }} className='justify-center mx-20'>
            <div className="demo-logo"><Image src={logo} alt='logo' width={60} height={60} /></div>
            <div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, borderWidth: 0, border: 'none', borderBottom: 'none' }}
                    className="fixed-menu"
                />
            </div>
            <div>
                <Button type="primary">Get Started</Button>
            </div>
        </Header>
    )
}

export default NavHeader