/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ArticleContext } from '../components/Utils/context';
import { PageSection } from './projects';

const Articles = () => {
  const articles = useContext(ArticleContext);
  return (
    <Layout title="Articles">
      <PageSection>
        <PageWrapper>
          <div style={{ marginBottom: '2rem' }}>
            <Link href="/" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'var(--cw)', 
              color: 'var(--bg)', 
              textDecoration: 'none', 
              borderRadius: '5px',
              fontSize: 'calc(var(--font-sm) + 0.5px)',
              fontWeight: '500'
            }}>
              ← Back to Home
            </Link>
          </div>
          <h1 className="intro__text">Reads.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {articles.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Articles">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('article') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Readings">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('reading') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Videos">
              <MansoryLayout>
                {articles.map(
                  (item, index) =>
                    item.type.includes('video') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Can you say hi now ?.
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

export default Articles;
