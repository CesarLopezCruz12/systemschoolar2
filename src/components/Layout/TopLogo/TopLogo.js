
import React from 'react';
import styles from './TopLogo.module.scss'; // Importa tus estilos SCSS
import Image from 'next/image';
import Link from 'next/link';
export function TopLogo() {

    return (
      <div className={styles.presentationBar}>
      <div className={styles.content}>
        <div className={styles.titleAndLogo}>
          
          <Link href='/' className='flex justify-center items-center'>
            <Image
              src='/imagenes/Lupa.png'
              alt='logo'
              width={40}
              height={18}
              className='object-contain'
            />
            <button className="ml-3 text-2xl">GlassCore</button>
          </Link>
        </div>
      </div>
      <hr className={styles.separator} />
    </div>
    )
  }
  