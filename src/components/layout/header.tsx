'use client';
import { Menu, Layout, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import logo from "@/assets/images/eco-mama.png";
import Image from 'next/image';
import Link from 'next/link';  // Import Link from Next.js
import useWindowDimensions from '@/hooks/useScreenSize';
import BurgerButton from './burger';

const { Header } = Layout;

const items = [
    {
        key: 1,
        label: <Link href="/">Home</Link>,  // Wrap label with Link
    },
    {
        key: 2,
        label: <Link href="/about">About</Link>,
    },
    {
        key: 3,
        label: <Link href="/services">Services</Link>,
    },
    {
        key: 4,
        label: <Link href="/hubs">Hubs</Link>,
    },
    {
        key: 5,
        label: <Link href="/blogs">Blogs</Link>,
    },
];

function NavHeader() {
    const { isDesktop, isMobile } = useWindowDimensions();
    const [isClosed, setIsClosed] = useState(true);
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Header
            style={{
                display: 'flex',
                background: '#fff',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                paddingRight: isDesktop ? 80 : 40,
                paddingLeft: isDesktop ? 80 : 40,
            }}
            className="sticky top-0 header-blur z-50 rounded-s-none"
        >
            {isDesktop ? (
                <>
                    <Image src={logo} alt="logo" width={60} height={60} />
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
                </>
            ) : (
                <>
                <Image src={logo} alt="logo" width={60} height={60} />
                    {isClient && <BurgerButton />}
                </>
            )}
        </Header>
    );
}

export default NavHeader;
