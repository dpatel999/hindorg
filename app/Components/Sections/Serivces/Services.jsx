'use client';
import Styles from './Services.module.css';
import Image from 'next/legacy/image';
import data from '../../../data/database.json';
import Card from '../../Card/Card';

export default function Services() {
  const products = data;

  const stats = [
    { value: '500+', label: 'Customers' },
    { value: '50+', label: 'Locations' },
    { value: '50+', label: 'Suppliers' },
    { value: '40+', label: 'Products' },
  ];

  return (
    <div className={Styles.SerWrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.fixwrapper}>
          {/* Desktop Stats Bar */}
          <div className={Styles.fixedbar}>
            {stats.map((stat, index) => (
              <div key={index} className={Styles.stat}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mobile Stats */}
          <div className={Styles.fixedbarm}>
            {stats.map((stat, index) => (
              <div key={index} className={Styles.stat}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className={Styles.subwrapper}>
            <div className={Styles.titlewrapper}>
              <span className={Styles.Title}>Our Products</span>
              <div className={Styles.Titlede}></div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '620px' }}>
              A comprehensive portfolio of high-purity industrial solvents and specialty chemicals.
            </p>

            <div className={Styles.bottom}>
              {products.map((item) => (
                <Card key={item.id} datasr={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
