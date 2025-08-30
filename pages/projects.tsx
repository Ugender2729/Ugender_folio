/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <Layout title="Project">
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
          <h1 className="intro__text">Projects.</h1> <br />
          <Tabs>
            <TabItems label="All">
              <MansoryLayout>
                {projectsData.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Projects">
              <MansoryLayout>
                {projectsData.map(
                  (item, index) =>
                    item.type.includes('project') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Dev Tools">
              <MansoryLayout>
                {projectsData.map(
                  (item, index) =>
                    item.type.includes('tools') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Open Source">
              <MansoryLayout>
                {projectsData.map(
                  (item, index) =>
                    item.type.includes('open-source') && (
                      <MansoryItem key={index} item={item} />
                    )
                )}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Resume">
              <div style={{ 
                padding: '2rem', 
                textAlign: 'center',
                backgroundColor: 'var(--bg)',
                borderRadius: '10px',
                border: '1px solid var(--border-color)'
              }}>
                <h2 style={{ 
                  fontSize: 'var(--font-lg)', 
                  marginBottom: '1rem',
                  color: 'var(--cw)'
                }}>
                  Ugender Dharavath
                </h2>
                <h3 style={{ 
                  fontSize: 'var(--font-md)', 
                  marginBottom: '1.5rem',
                  color: 'var(--article-color)'
                }}>
                  Frontend Developer
                </h3>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  <a 
                    href="tel:+91-9398601984"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--cw)',
                      color: 'var(--bg)',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: 'calc(var(--font-sm) + 0.5px)'
                    }}
                  >
                    📞 +91-9398601984
                  </a>
                  <a 
                    href="mailto:ugenderdharavath1@gmail.com"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--mark)',
                      color: 'var(--bg)',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: 'calc(var(--font-sm) + 0.5px)'
                    }}
                  >
                    ✉️ Email
                  </a>
                </div>
                <div style={{ 
                  textAlign: 'left',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  <h4 style={{ color: 'var(--cw)', marginBottom: '0.5rem' }}>Professional Summary</h4>
                  <p style={{ marginBottom: '1rem', color: 'var(--article-color)' }}>
                    Around 4+ years of professional experience in which 4 years of experience in a software development subject matter expert. 
                    Known for having excellent troubleshooting skills and being able to address client needs and overcome client concerns.
                  </p>
                  <h4 style={{ color: 'var(--cw)', marginBottom: '0.5rem' }}>Experience</h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    marginBottom: '1rem',
                    color: 'var(--article-color)'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>• IT INTELLECT MICRO SOLUTIONS - Associate Software Engineer (May 2021 - Dec 2024)</li>
                    <li style={{ marginBottom: '0.5rem' }}>• CAMELQ SOFTWARE SOLUTIONS - Frontend Developer (Dec 2024 - Present)</li>
                  </ul>
                  <h4 style={{ color: 'var(--cw)', marginBottom: '0.5rem' }}>Education</h4>
                  <p style={{ color: 'var(--article-color)' }}>B.Tech from NIT Surat</p>
                  <div style={{ 
                    textAlign: 'center', 
                    marginTop: '2rem'
                  }}>
                    <a 
                      href="/resume"
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'var(--cw)',
                        color: 'var(--bg)',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontSize: 'calc(var(--font-sm) + 0.5px)',
                        fontWeight: '500'
                      }}
                    >
                      View Full Resume
                    </a>
                  </div>
                </div>
              </div>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/resume" className="mt-3 mb-5">
          Lets Go To My Resume.
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};
export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
`;

export default Projects;
