'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

const Character = ({ char }) => {
    const { t } = useTranslation();

    return (
        <div>
            <div
                className='bg-white/15 p-4 sm:p-14 flex rounded-[40px] flex-col lg:flex-row relative gap-14'
                dir={`${i18n.language == 'fa' ? 'rtl' : 'ltr'}`}
            >
                <div className=' w-full md:w-3/4 lg:w-[38%] mx-auto lg:ml-0'>
                    <Image
                        src={'http://localhost:4000/images/' + char.cover}
                        width={2000}
                        height={2000}
                        className='w-full h-full object-contain mx-auto'
                        alt={t(`${char.id}.name`)} 
                    />
                </div>
                <div className='lg:mt-14 lg:w-1/2 w-full'>
                    <p className='font-bold text-3xl '>
                        {+char.id < 10 && '0'}
                        {char.id}. {t(`${char.id}.name`)} 
                    </p>
                    <p className='my-14'>{t(`${char.id}.description`)}</p>{' '}
                    <Link
                        href={`/${char.id}`}
                        className='border-2 hover:text-gray-700 hover:shadow-1 hover:bg-white duration-300 border-white bg-transparent text-white py-3 px-2 rounded-xl'
                    >
                        {t('ui.button')}
                    </Link>
                </div>
                <p
                    className={`opacity-20 text-white absolute bottom-4 md:bottom-12 ${
                        i18n.language == 'fa' ? 'left-12' : 'right-12'
                    }`}
                >
                    {t('ui.shahname')}
                </p>
            </div>
        </div>
    );
};

export default Character;
