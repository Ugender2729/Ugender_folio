/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Contact = () => {
  return (
    <Layout title="Contact">
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
          
          <h1 className="intro__text">Contact.</h1>
          
          <article>
            <p>
              I'm always excited to connect with potential clients, collaborators, and fellow developers! 
              The best way to reach me is through LinkedIn, where I'm most active and responsive.
            </p>
            <p>
              Whether you have a project in mind, want to discuss collaboration opportunities, 
              or just want to connect professionally, feel free to reach out!
            </p>
          </article>
          
          <br />
          
          {/* Primary LinkedIn Contact Section */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            backgroundColor: 'var(--bg)',
            borderRadius: '15px',
            border: '2px solid var(--cw)',
            marginTop: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1.5rem'
            }}>
              💼
            </div>
            <h2 style={{
              fontSize: 'var(--font-lg)',
              marginBottom: '1rem',
              color: 'var(--cw)',
              fontWeight: '700'
            }}>
              Connect on LinkedIn
            </h2>
            <p style={{
              fontSize: 'var(--font-md)',
              marginBottom: '2rem',
              color: 'var(--article-color)',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto 2rem auto'
            }}>
              I'm most active on LinkedIn and respond quickly to professional inquiries. 
              Send me a connection request or message to discuss your project needs.
            </p>
            
            <a
              href="https://www.linkedin.com/in/ugender-dharavath-856573323/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1rem 2.5rem',
                backgroundColor: '#0077b5',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: 'var(--font-md)',
                fontWeight: '600',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)',
                border: '2px solid #0077b5'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#005885';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 119, 181, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0077b5';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            
            <p style={{
              fontSize: 'var(--font-sm)',
              color: 'var(--article-color)',
              marginTop: '1.5rem',
              opacity: 0.8
            }}>
              ⚡ I typically respond within 24 hours
            </p>
          </div>

          {/* Alternative Contact Methods */}
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
              📧 Other Ways to Reach Me
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a
                href="mailto:ugenderdharavath1@gmail.com"
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
                ✉️ Send Direct Email
              </a>
              <a
                href="tel:+91-9398601984"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--mark)',
                  color: 'var(--bg)',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: 'calc(var(--font-sm) + 0.5px)',
                  fontWeight: '500',
                  gap: '0.5rem'
                }}
              >
                📞 Call Now
              </a>
              <a
                href="https://github.com/Ugender2729"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#333',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: 'calc(var(--font-sm) + 0.5px)',
                  fontWeight: '500',
                  gap: '0.5rem'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--bg)',
            borderRadius: '10px',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-md)',
              marginBottom: '1rem',
              color: 'var(--cw)',
              textAlign: 'center'
            }}>
              🚀 What I'm Looking For
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: 'var(--bg)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
                <h4 style={{ color: 'var(--cw)', marginBottom: '0.5rem' }}>Frontend Projects</h4>
                <p style={{ fontSize: 'var(--font-sm)', color: 'var(--article-color)' }}>
                  React.js, Next.js, and modern web development projects
                </p>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: 'var(--bg)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                <h4 style={{ color: 'var(--cw)', marginBottom: '0.5rem' }}>Collaborations</h4>
                <p style={{ fontSize: 'var(--font-sm)', color: 'var(--article-color)' }}>
                  Team projects and open source contributions
                </p>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: 'var(--bg)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
                <h4 style={{ color: 'var(--cw)', marginBottom: '0.5rem' }}>Consulting</h4>
                <p style={{ fontSize: 'var(--font-sm)', color: 'var(--article-color)' }}>
                  Technical guidance and architecture reviews
                </p>
              </div>
            </div>
          </div>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Go Back Home
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
  input,
  textarea {
    background: transparent;
    color: var(--cw) !important;
    margin-bottom: 2rem;
    box-shadow: none !important;
    resize: none;
    padding: 24px 21px !important;
    border-color: var(--border-color) !important;
    &:focus {
      background-color: var(--bg);
    }
  }
  button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
  }
  form {
    width: 60%;
  }
  @media (max-width: 585px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 989px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 220px) {
    form {
      width: 100% !important;
    }
  }
`;

export default Contact;
