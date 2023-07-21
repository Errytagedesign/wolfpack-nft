import React from 'react';
import { Link } from 'react-router-dom';
import images from '../exports/images';
import './Footer.scss';

// icons
import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from 'react-icons/fa';

import { BiCopyright } from 'react-icons/bi';

function Footer() {
  return (
    <div className='footer d-flex flex-column'>
      <main className='d-flex flex-column flex-lg-row  justify-content-between align-items-center align-items-lg-start '>
        {/* Logo */}
        <section className='col-12 col-md-8 logo col-lg-4 d-flex flex-column text-center text-lg-start mx-auto'>
          <div className='d-flex flex-row col-10 col-md-6 col-lg-12 mx-auto align-items-center '>
            <div>
              {' '}
              <img
                className='col-12'
                src={images.Logo}
                alt=' Wolf Pack Logo'
              />{' '}
            </div>
            <h2> WolfPack Herd </h2>{' '}
          </div>
          <p>
            {' '}
            Discover valuable digital collectibies with WolfPackHerd. Buy, sell,
            stop losses and earn more.
          </p>

          <div className='community-container d-none d-lg-flex flex-column'>
            <h4> Community </h4>
            <div className='icon'>
              {' '}
              <a
                href='https://twitter.com/WolfPackHerd'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <FaTwitter />{' '}
              </a>{' '}
              <a
                href='https://t.me/WolfPackHerdNetwork'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <FaTelegramPlane />{' '}
              </a>{' '}
              <a
                href='https://discord.gg/VdjEbbx86n '
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <FaDiscord />{' '}
              </a>{' '}
              <a
                href='https://youtube.com/WolfPackHerdNetwork'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <FaYoutube />{' '}
              </a>{' '}
            </div>
          </div>
        </section>

        <section className='d-flex flex-row justify-content-between col-12 col-lg-7'>
          <div className='d-flex flex-column flex-lg-row justify-content-between col-lg-6'>
            {/* company */}
            <aside className='d-flex align-content-center col-12 col-lg-6 flex-column '>
              <h4> Company </h4>
              <Link to='/about'>About</Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/careers'> Careers</Link>
              <Link to='/donate'> Buy us coffee </Link>
              <Link to='/contact'> Contact us </Link>
            </aside>

            {/* services */}
            <aside className='d-flex col-12 col-lg-6  flex-column '>
              <h4> Services </h4>
              <Link to='/ntfarts'>Metacard </Link>
              <Link to='/ivory'> High-end Marketplace</Link>
              <Link to='/musicnft'> DAO Staking </Link>
              <Link to='/cryptocard'> Coloring Book</Link>
              <Link to='/deficalendar'> Trading Fees </Link>
            </aside>
          </div>

          <div className='d-flex flex-column flex-lg-row justify-content-between col-lg-6'>
            {/* Support
            <aside className='d-flex col-12 col-lg-6  flex-column '>
              <h4> Support </h4>
              <Link to='/about'>Help center</Link>
              <Link to='/careers'> Account informations</Link>
              <Link to='/donate'> Settings</Link>
              <Link to='/contact'> FAQ </Link>
            </aside> */}
            <aside className='d-flex col-12 col-lg-6  flex-column '>
              <h4> Resources </h4>
              <Link to='/about'>Mint process</Link>
              <Link to='/careers'> Whitepaper</Link>
              <Link to='/donate'> Partners </Link>
              <Link to='/contact'> Documentation </Link>
              <Link to='/contact'> Github </Link>
              <Link to='/contact'> Newsletter </Link>
              <Link to='/contact'> Tutorial </Link>
            </aside>
          </div>
        </section>
        <div className='community-container d-flex flex-column d-lg-none align-items-center'>
          <h4> Community </h4>
          <div className='icon'>
            <a
              href='https://twitter.com/WolfPackHerd'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaTwitter />{' '}
            </a>{' '}
            <a
              href='https://t.me/WolfPackHerdNetwork'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaTelegramPlane />{' '}
            </a>{' '}
            <a
              href='https://discord.gg/VdjEbbx86n '
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaDiscord />{' '}
            </a>{' '}
            <a
              href='https://youtube.com/WolfPackHerdNetwork'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <FaYoutube />{' '}
            </a>{' '}
          </div>
        </div>
      </main>

      <article className='d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start'>
        <small>
          {' '}
          <BiCopyright /> 2023 Wolfpackherd Network,inc. All rights reserved
        </small>
        <div className='d-flex col-8 col-md-3 mt-3 mt-lg-0 flex-row justify-content-between'>
          <small> Terms of use</small>
          <small> Privacy policy</small>
        </div>
      </article>
    </div>
  );
}

export default Footer;
