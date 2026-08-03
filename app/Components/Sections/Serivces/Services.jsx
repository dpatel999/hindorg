'use client';
import { useMemo, useState } from 'react';
import Styles from './Services.module.css';
import data from '../../../data/database.json';
import Card from '../../Card/Card';

const stats = [
  { value: '500+', label: 'Customers Served' },
  { value: '50+', label: 'Cities Covered' },
  { value: '30+', label: 'Years Experience' },
  { value: '40+', label: 'Product Grades' },
];

export default function Services() {
  const products = data;
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [products]);

  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <div className={Styles.SerWrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.statsBar}>
          {stats.map((stat) => (
            <div key={stat.label} className={Styles.stat}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className={Styles.subwrapper}>
          <div className={Styles.titleRow}>
            <div>
              <span className={Styles.kicker}>Product Catalogue</span>
              <h2 className={Styles.Title}>High-Purity Solvents & Specialty Chemicals</h2>
              <div className={Styles.Titlede} />
              <p className={Styles.intro}>
                A curated range of industrial solvents with CAS-identified grades, low-moisture
                options, and custom blends — the product depth buyers expect from established
                manufacturers like Vinati Organics and Aarti Industries, delivered with the
                responsiveness of a focused specialty house.
              </p>
            </div>
          </div>

          <div className={Styles.filters} role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`${Styles.filterBtn} ${active === cat ? Styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={Styles.bottom}>
            {filtered.map((item) => (
              <Card key={item.id} datasr={item} />
            ))}
          </div>

          <p className={Styles.note}>
            Need a grade, moisture limit, or pack size not listed?{' '}
            <a href="#inquiry">Request a custom quote</a> — we regularly supply to specification.
          </p>
        </div>
      </div>
    </div>
  );
}
