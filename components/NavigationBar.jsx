'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationBar = () => {
    const pathName = usePathname();
    const [activePath, setActivePath] = useState('/');

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Users', path: '/users' },
    ];

    const handleNavClick = (path) => {
        setActivePath(path);
    };

    return (
        <nav className="bg-blue-600 py-5 mb-10">
            <div className="container ml-40 flex justify-start items-center">
                <ul className="flex space-x-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`text-white text-xl hover:text-gray-300 ${
                                    activePath === item.path ? 'font-bold' : ''
                                }`}
                                onClick={(e) => { 
                                    handleNavClick(item.path); 
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;