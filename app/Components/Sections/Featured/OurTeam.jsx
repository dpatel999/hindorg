'use client';
import Image from 'next/legacy/image';
import Styles from './OurTeam.module.css';

const team = [
  { name: 'Haresh Patel', role: 'Director', image: '/Assets/team/Haresh.jpeg' },
  { name: 'Pankaj Patel', role: 'Manager', image: '/Assets/team/3.webp' },
  { name: 'Darshan Patel', role: 'Technical Lead', image: '/Assets/team/4.webp' },
];

export default function OurTeam() {
  return (
    <div className={Styles.mainwrapper}>
      <div className={Styles.childwrapper}>
        <div className={Styles.titlewrapper}>
          <span className="section-subtitle">Leadership</span>
          <h2 className="section-title">Our Team</h2>
        </div>

        <div className={Styles.IMGsbottomWrap}>
          {team.map((member, index) => (
            <div key={index} className={Styles.imgcard}>
              <Image
                src={member.image}
                alt={member.name + ', ' + member.role + ' at Hindustan Organics'}
                width={420}
                height={520}
                objectFit="cover"
                className={Styles.mainImg}
              />
              <div className={Styles.contentTeam}>
                <span>{member.name}</span>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
