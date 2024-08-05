"use client";

import { useState, useEffect } from 'react';
import { RogueApp } from '../lib/types';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [rogueApps, setRogueApps] = useState<RogueApp[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    async function fetchRogueApps() {
      const res = await fetch('/api/rogueapps');
      const data: RogueApp[] = await res.json();
      setRogueApps(data);
    }
    fetchRogueApps();
  }, []);

  const filteredApps = rogueApps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.contributor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.mitreTTP.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.riskLevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.permissions.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpandCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>RogueApps</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search}
        />

        <div className={`${styles.grid} ${expandedCard !== null ? styles.hidden : ''}`}>
          {filteredApps.map((app, index) => (
            <div
              key={index}
              className={`${styles.card} ${expandedCard === index ? styles.expanded : ''}`}
              onClick={() => toggleExpandCard(index)}
            >
              <h3>{app.name}</h3>
              <p><strong>Description:</strong> {app.description}</p>
              <p><strong>Contributor:</strong> {app.contributor}</p>
              <p><strong>MITRE TTP:</strong> {app.mitreTTP}</p>
              <p><strong>Category:</strong> {app.category}</p>
              <p><strong>Risk Level:</strong> {app.riskLevel}</p>
              <p><strong>Date Added:</strong> {app.dateAdded}</p>
              <p><strong>Tags:</strong> {app.tags.join(', ')}</p>
              <p><strong>Permissions:</strong> {app.permissions.join(', ')}</p>
              <p><strong>References:</strong></p>
              <ul>
                {app.references.map((ref, refIndex) => (
                  <li key={refIndex}>
                    <a href={ref} target="_blank" rel="noopener noreferrer">
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {expandedCard !== null && (
          <div
            className={`${styles.expandedCard} ${styles.card}`}
            onClick={() => toggleExpandCard(expandedCard)}
          >
            <h3>{filteredApps[expandedCard].name}</h3>
            <p><strong>Description:</strong> {filteredApps[expandedCard].description}</p>
            <p><strong>Contributor:</strong> {filteredApps[expandedCard].contributor}</p>
            <p><strong>MITRE TTP:</strong> {filteredApps[expandedCard].mitreTTP}</p>
            <p><strong>Category:</strong> {filteredApps[expandedCard].category}</p>
            <p><strong>Risk Level:</strong> {filteredApps[expandedCard].riskLevel}</p>
            <p><strong>Date Added:</strong> {filteredApps[expandedCard].dateAdded}</p>
            <p><strong>Tags:</strong> {filteredApps[expandedCard].tags.join(', ')}</p>
            <p><strong>Permissions:</strong> {filteredApps[expandedCard].permissions.join(', ')}</p>
            <p><strong>References:</strong></p>
            <ul>
              {filteredApps[expandedCard].references.map((ref, refIndex) => (
                <li key={refIndex}>
                  <a href={ref} target="_blank" rel="noopener noreferrer">
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
