'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

const Character = ({ params, char, isSingle = false }) => {
    const { lang } = params;
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='bg-white/15 p-4 sm:p-14 flex rounded-[20px] flex-col lg:flex-row relative gap-14 mb-8'>
                {isSingle ? (
                    <>
                        <div dir={`${i18n.language == 'fa' ? 'rtl' : 'ltr'}`}>
                            <p className='font-bold text-3xl text-white'>
                                {char.name}
                            </p>
                            <p className='my-8 text-white'>
                                {char.description}
                            </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
                            <Image
                                src={
                                    'http://localhost:4000/images/' + char.cover
                                }
                                width={2000}
                                height={2000}
                                className='w-full h-full object-contain mx-auto'
                                alt={char.name}
                            />
                            {char.images.map((img, i) => (
                                <div key={i}>
                                    <Image
                                        src={
                                            'http://localhost:4000/images/' +
                                            img
                                        }
                                        width={2000}
                                        height={2000}
                                        className='w-full h-full object-contain mx-auto'
                                        alt={char.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className=' w-full md:w-3/4 lg:w-[38%] mx-auto lg:ml-0'
                            dir={`${i18n.language == 'fa' ? 'rtl' : 'ltr'}`}
                        >
                            <Image
                                src={
                                    'http://localhost:4000/images/' + char.cover
                                }
                                width={2000}
                                height={2000}
                                className='w-full h-full object-contain mx-auto'
                                alt={char.name}
                            />
                        </div>
                        <div
                            className='lg:mt-14 lg:w-1/2 w-full'
                            dir={`${i18n.language == 'fa' ? 'rtl' : 'ltr'}`}
                        >
                            <p className='font-bold text-3xl text-white'>
                                {+char.id < 10 && '0'}
                                {char.id}. {char.name}
                            </p>
                            <p className='my-14 text-white'>
                                {char.description}
                            </p>{' '}
                            <Link
                                href={`/${lang}/character/${char.id}`}
                                className='border-2 hover:text-gray-700 hover:shadow-1 hover:bg-white duration-300 border-white bg-transparent text-white py-3 px-2 rounded-xl'
                            >
                                {t('button')}
                            </Link>
                        </div>
                        <p
                            className={`opacity-20 text-white absolute bottom-4 md:bottom-12 right-12 `}
                        >
                            {t('shahname')}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Character;
