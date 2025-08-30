/* eslint-disable react/destructuring-assignment */
/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { LensContext } from '../components/Utils/context';
import { PageSection } from './projects';

const LensPage = () => {
  const lens = useContext(LensContext);
  return (
    <Layout title="Lens">
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
          <h1 className="intro__text">Lens.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {lens.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Ray Ban">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('ray-ban') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Persol">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('persol') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="EdBlue">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('Edblue') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Sight Relax">
              <MansoryLayout>
                {lens.map(
                  (item, index) =>
                    item.type.includes('sight-relax') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Go To My Projects.
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

export default LensPage;
