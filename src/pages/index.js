/// Compex Systemhaus GmbH, Heidelberg, Germany
/// Loetz GmbH & Co KG

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'About',
    imageUrl: 'img/BIRT_Home-Left.png',
    description: (
      <>
        What is BIRT? Get an overview what BIRT is all about: architecture, philosophy, customization, extensibility, and much more... 
      </>
    ),
  },
  {
    title: 'Get started',
    imageUrl: 'img/Lets-get-startd.jfif',
    description: (
      <>
        Download and get started. Create your first report and find even more examples...
      </>
    ),
  },
  {
    title: 'Documentation',
    imageUrl: 'img/Documentation.svg',
    description: (
      <>
        You want to dive deep inside BIRT. Read the Documentation where you will finde all information you need.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 class="text--center">{title}</h3>
      <p class="text--center">{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`BIRT ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}
          </p>
          With BIRT you can create data visualizations, dashboards and reports <br/>that can be embedded into web applications and rich clients. Make information out of your data! <p></p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
