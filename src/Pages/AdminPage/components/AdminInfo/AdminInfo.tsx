import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../images/logo.png';
import s from './AdminInfo.module.scss';
import LinkIcon from '../../../../images/svg/LinkIcon/LinkIcon';
import AdminCategory from '../AdminCategory/AdminCategory';
import TwitterScore from '../TwitterScore/TwitterScore';

const AdminInfo = () => {
  return (
    <div className={s.info}>
      <div className={s.info__logo}>
        <img src={img} alt="logo" />
      </div>
      <div className={s.info__col1}>
        <div className={s.info__nameWrapper}>
          <span className={s.info__name}>Hyperline</span>
          <AdminCategory category="GameFi" />
        </div>
        <div className={s.info__links}>
          <ul>
            <li>
              <Link>
                <LinkIcon platform="web" />
              </Link>
            </li>
            <li>
              <Link>
                <LinkIcon platform="twitter" />
              </Link>
            </li>
            <li>
              <Link>
                <LinkIcon platform="telegram" />
              </Link>
            </li>
            <li>
              <Link>
                <LinkIcon platform="discord" />
              </Link>
            </li>
            <li>
              <Link>
                <LinkIcon platform="other" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.info__col2}>
        <span className={s.info__total}>Total raised</span>
        <span className={s.info__value}>Valuation</span>
      </div>
      <div className={s.info__col3}>
        <span className={s.info__totalPrice}>$ 17.6M</span>
        <span className={s.info__valuePrice}>$ 800M</span>
      </div>
      <div className={s.info__col4}>
        <span className={s.info__twitterName}>Twitterscore</span>
        <div className={s.info__twitterScore}>
          <TwitterScore value={300} />
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
