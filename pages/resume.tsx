/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1QiDPciwpRC1OOaVwqe8S4FdcKijvHzIS/edit?usp=sharing&ouid=107995317623485311653&rtpof=true&sd=true';

  // Convert Google Docs edit link to view link for better compatibility
  const viewUrl = resumeUrl.replace('/edit?', '/preview?');

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
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
          <article>
            <h1 className="intro__text">Resumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link href="/contact">contact page</Link>
              </b>{' '}
              .{' '}
              <b>
                <a
                  href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                >
                  view
                </a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                >
                  download
                </a>
              </b>{' '}
              the resume{' '}
            </p>
          </article>
          <br />
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'var(--bg)',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            marginTop: '2rem'
          }}>
            <h3 style={{
              fontSize: 'var(--font-md)',
              marginBottom: '1rem',
              color: 'var(--cw)'
            }}>
              📄 Resume Preview
            </h3>
            <p style={{
              fontSize: 'calc(var(--font-sm) + 0.5px)',
              marginBottom: '1.5rem',
              color: 'var(--article-color)',
              lineHeight: '1.6'
            }}>
              Click the links above to view or download my complete resume from Google Docs.
            </p>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--cw)',
                color: 'var(--bg)',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: 'calc(var(--font-sm) + 0.5px)',
                fontWeight: '500',
                gap: '0.5rem'
              }}
            >
              📋 Open Resume
            </a>
          </div>
        </PageSection>
        <br />
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now ?
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;
export default Resume;
