'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import i18n from '@/i18n';
const SelectLang = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (isChecked) => {
        const newLang = isChecked ? 'fa' : 'en';
        i18n.changeLanguage(newLang);

        // Split the current path and replace the language segment
        const pathSegments = pathname.split('/');
        if (pathSegments[1] === 'fa' || pathSegments[1] === 'en') {
            pathSegments[1] = newLang; // Replace the language
        } else {
            pathSegments.unshift(newLang); // Add the language segment if missing
        }

        const newPath = pathSegments.join('/');

        // Navigate to the new path and prevent automatic scrolling
        router.push(newPath, undefined, { scroll: false });
    };

    return (
        <div className='checkbox-wrapper-35'>
            <input
                value='private'
                name='switch'
                id='switch'
                type='checkbox'
                className='switch'
                onChange={(event) => handleLanguageChange(event.target.checked)}
            />
            <label htmlFor='switch'>
                <span className='switch-x-toggletext'>
                    <span className='switch-x-unchecked !text-white'>
                        English
                    </span>
                    <span className='switch-x-checked !text-white'>فارسی</span>
                </span>
            </label>
        </div>
    );
};

export default SelectLang;
