'use client';

import { useState } from 'react';
import type { CityData } from '@/lib/cities';
import { stadiums as stadiumData } from '@/lib/stadiums';

const tabs = [
  { id: 'story', label: 'The City' },
  { id: 'see', label: 'See' },
  { id: 'eat', label: 'Eat & Drink' },
  { id: 'navigate', label: 'Navigate' },
  { id: 'stay', label: 'Stay' },
  { id: 'match', label: 'Match Day' },
];

function TheCity({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.lede}</p>
      {city.sections.map((s, i) => (
        <div key={i}>
          <h3 className="section-head">{s.title}</h3>
          {s.paragraphs.map((p, j) => (
            <p key={j} className="body-text">{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

function SeeSection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">The obvious places are obvious for a reason. Go to them. But go at the right time, with the right context.</p>
      <div style={{ marginTop: 32 }}>
        {city.places.map(p => (
          <div key={p.name} style={{ padding: '24px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
              <h4 className="display" style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 400, letterSpacing: '-0.02em' }}>{p.name}</h4>
              <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em', color: '#bbb', flexShrink: 0 }}>{p.tag}</span>
            </div>
            <p className="body-text" style={{ marginBottom: 0, marginTop: 0 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EatSection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.eat.intro}</p>
      <h3 className="section-head">Restaurants</h3>
      {city.eat.entries.map(e => (
        <div key={e.name} style={{ padding: '14px 0', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>{e.name}</span>
          <span style={{ color: '#888', fontSize: 14 }}> — {e.d}</span>
        </div>
      ))}
      <h3 className="section-head">Street food</h3>
      <p className="body-text">{city.eat.street}</p>
      <h3 className="section-head">Drinking</h3>
      <p className="body-text">{city.eat.drink}</p>
    </div>
  );
}

function NavigateSection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.name} is connected to every other host city. The question is how fast and how comfortably.</p>
      <h3 className="section-head">Getting here</h3>
      <p className="body-text">{city.navigateIntro}</p>
      <h3 className="section-head">From other host cities</h3>
      <div style={{ marginTop: 16 }}>
        {city.routes.map(route => (
          <div key={route.from} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>From {route.from}</p>
            {route.opts.map((o, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 70px 1fr', gap: 8, padding: '6px 0', borderBottom: '1px solid #f5f5f5', fontSize: 14, alignItems: 'baseline' }}>
                <span style={{ color: '#444' }}>{o.mode}</span>
                <span className="mono" style={{ fontSize: 11, color: '#999' }}>{o.time}</span>
                <span style={{ color: '#888', fontWeight: 300 }}>{o.note}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className="section-head">Inside the city</h3>
      {city.navigateLocal.map((p, i) => (
        <p key={i} className="body-text">{p}</p>
      ))}
    </div>
  );
}

function StaySection({ city }: { city: CityData }) {
  return (
    <div className="fade-in">
      <p className="lede">{city.stayIntro}</p>
      <h3 className="section-head">Where to sleep</h3>
      {city.stayOptions.map((o, i) => (
        <p key={i} className="body-text">{o}</p>
      ))}
      <h3 className="section-head">Before you book</h3>
      <p className="body-text">{city.stayBookingTip}</p>
      <p style={{ marginTop: 24, fontSize: 14 }}>
        <a href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city.name + '+Morocco')}`}
          target="_blank" rel="noopener noreferrer sponsored" className="quiet-link">
          Browse hotels in {city.name} →
        </a>
      </p>
    </div>
  );
}

function MatchDaySection({ city }: { city: CityData }) {
  const s = stadiumData[city.id];

  return (
    <div className="fade-in">
      {/* Stadium header */}
      <div style={{ padding: '0 0 28px', borderBottom: '1px solid #f0f0f0' }}>
        <p className="mono" style={{ fontSize: 10, letterSpacing: '.12em', color: '#bbb', marginBottom: 8 }}>VENUE</p>
        <h3 className="display" style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {s ? s.name : city.stadium.name}
        </h3>
        {s?.nameAr && <p style={{ fontSize: 16, color: '#ccc', marginTop: 4, direction: 'rtl' }}>{s.nameAr}</p>}
      </div>

      {s ? (
        <>
          {/* Key stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0 28px', padding: '24px 0', borderBottom: '1px solid #f0f0f0' }}>
            {[
              { label: 'Capacity', value: s.capacity },
              { label: 'Max round', value: s.maxRound },
              { label: 'Distance', value: s.distFromCentre },
              { label: 'Status', value: s.status.split('.')[0] },
            ].map(stat => (
              <div key={stat.label} style={{ padding: '8px 0' }}>
                <p className="mono" style={{ fontSize: 9, letterSpacing: '.1em', color: '#bbb', marginBottom: 4 }}>{stat.label}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#1a1a1a', lineHeight: 1.4 }}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ margin: '28px 0', borderRadius: 4, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${s.lat},${s.lng}&zoom=13&maptype=satellite`}
              width="100%" height="300" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ padding: '12px 16px', background: '#fafafa', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              <span style={{ fontSize: 12, color: '#888' }}>{s.lat.toFixed(4)}, {s.lng.toFixed(4)}</span>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`}
                target="_blank" rel="noopener noreferrer"
                className="quiet-link" style={{ fontSize: 12 }}
              >
                Get directions →
              </a>
            </div>
          </div>

          {/* Capacity detail */}
          <p className="body-text">{s.capacityNote}</p>

          {/* Design */}
          <h3 className="section-head">The stadium</h3>
          <p className="body-text">{s.design}</p>
          <p className="body-text">{s.status}</p>
          {s.architect && <p className="body-text" style={{ color: '#888' }}>Architect: {s.architect}. {s.opened ? `Opened ${s.opened}.` : ''} {s.homeTo ? `Home to ${s.homeTo}.` : ''}</p>}

          {/* Key fact */}
          <div style={{ margin: '24px 0', padding: '20px 24px', background: '#fafafa', borderLeft: '3px solid #1a1a1a' }}>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#444', fontWeight: 300 }}>{s.keyFact}</p>
          </div>

          {/* Getting there */}
          <h3 className="section-head">Getting to the stadium</h3>
          {s.gettingThere.map((tip, i) => (
            <p key={i} className="body-text">{tip}</p>
          ))}

          {/* Surroundings */}
          <h3 className="section-head">Around the ground</h3>
          <p className="body-text">{s.surroundings}</p>

          {/* Match day tips */}
          <h3 className="section-head">Match day tips</h3>
          {s.matchDayTips.map((tip, i) => (
            <p key={i} className="body-text">{tip}</p>
          ))}
        </>
      ) : (
        <p className="body-text">Capacity {city.stadium.capacity}. {city.stadium.detail}</p>
      )}

      {/* The plan — from city data */}
      <h3 className="section-head">The plan</h3>
      {city.matchDay.map((m, i) => (
        <p key={i} className="body-text"><strong>{m.split(' — ')[0]}</strong> — {m.split(' — ')[1]}</p>
      ))}

      {/* Essentials */}
      <h3 className="section-head">What you need</h3>
      <p className="body-text"><strong>FAN ID</strong> — mandatory. Download the YALLA app and register before you arrive. Required for stadium entry, fan zones, and some transport. Free. All attendees including Moroccan citizens must have one.</p>
      <p className="body-text"><strong>Cash</strong> — carry small bills (10, 20, 50 MAD). Not every vendor takes cards. ATMs at banks and the airport. Do not change money with people in the street.</p>
      <p className="body-text"><strong>Offline maps</strong> — download Google Maps for {city.name} before you arrive. Save pins for: your hotel, the stadium, the train/bus station, and the airport. GPS signal inside medinas is unreliable.</p>
      <p className="body-text"><strong>Water</strong> — bring a bottle. June/July temperatures in {city.name} can exceed 35°C. Stadium vendors sell water but queues will be long.</p>
    </div>
  );
}

export default function CityTabs({ city }: { city: CityData }) {
  const [tab, setTab] = useState('story');

  const renderSection = () => {
    switch (tab) {
      case 'story': return <TheCity city={city} />;
      case 'see': return <SeeSection city={city} />;
      case 'eat': return <EatSection city={city} />;
      case 'navigate': return <NavigateSection city={city} />;
      case 'stay': return <StaySection city={city} />;
      case 'match': return <MatchDaySection city={city} />;
      default: return <TheCity city={city} />;
    }
  };

  return (
    <>
      {/* Section tabs */}
      <div style={{
        position: 'sticky', top: 53, zIndex: 90,
        background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(16px,3vw,40px)', overflowX: 'auto',
      }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '12px clamp(10px,1.8vw,20px)',
            borderBottom: tab === t.id ? '2px solid #1a1a1a' : '2px solid transparent',
            flexShrink: 0, transition: 'border-color .2s',
          }}>
            <span style={{
              fontSize: 12, fontWeight: tab === t.id ? 500 : 400,
              color: tab === t.id ? '#1a1a1a' : '#bbb',
              whiteSpace: 'nowrap',
            }}>
              {t.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '40px clamp(20px,5vw,40px) 80px' }}>
        {renderSection()}
      </main>
    </>
  );
}
