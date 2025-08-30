/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my professional background section"
        >
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
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <h4>Engineering & Development</h4>
                <p>
                  With over 4 years of professional experience in frontend development, I specialize in React.js, JavaScript, and modern web technologies. I have a proven track record of delivering high-quality solutions for enterprise clients, including Citi Bank, Quantela, and TUMI. My expertise spans from building responsive web applications to developing cross-platform mobile solutions using React Native. I'm passionate about creating seamless user experiences and leveraging cutting-edge technologies to solve complex business challenges.
                </p>
              </li>
              <li>
                <h4>Product & Project Management</h4>
                <p>
                  My experience includes developing enterprise-level applications, e-commerce platforms, and real-time systems. I've successfully delivered projects ranging from command center dashboards for financial institutions to IoT monitoring systems for smart cities. My technical expertise includes React.js, Redux, D3.js, Socket.IO, and various modern web technologies. I'm skilled in both individual contribution and team leadership, having mentored junior developers and collaborated effectively in Agile environments.
                </p>
              </li>
              <li>
                <h4>Design & User Experience</h4>
                <p>
                  I focus on creating intuitive, responsive user interfaces that provide exceptional user experiences. My approach combines technical expertise with an understanding of user needs, ensuring that every application I build is both functional and user-friendly. I have experience working with UI/UX designers and stakeholders to translate requirements into elegant, scalable solutions that meet business objectives.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my education section"
        >
          <article>
            <h4>Education & Qualifications</h4>
            <ul className="timeline">
              <li>
                <h4>B.Tech in Computer Science & Engineering</h4>
                <p>
                  <strong>Institution:</strong> National Institute of Technology (NIT), Surat<br/>
                  <strong>Duration:</strong> 2017 - 2021<br/>
                  <strong>Focus:</strong> Computer Science, Software Engineering, Data Structures & Algorithms
                </p>
              </li>
              <li>
                <h4>Software Development & Modern Web Technologies</h4>
                <p>
                  <strong>Platform:</strong> Udemy, Coursera, MDN Web Docs, Official Documentation<br/>
                  <strong>Duration:</strong> 2021 - Present<br/>
                  <strong>Skills:</strong> React.js, HTML, CSS, Tailwind CSS, Next.js, JavaScript, Modern Web Development
                </p>
              </li>
              <li>
                <h4>React Native & Cross-Platform Development</h4>
                <p>
                  <strong>Platform:</strong> React Native Documentation, Expo, Udemy<br/>
                  <strong>Duration:</strong> 2020 - Present<br/>
                  <strong>Skills:</strong> React Native, Expo, Mobile App Development, Cross-platform Solutions
                </p>
              </li>
              <li>
                <h4>Enterprise Development & Best Practices</h4>
                <p>
                  <strong>Experience:</strong> Professional Projects & Industry Standards<br/>
                  <strong>Duration:</strong> 2019 - Present<br/>
                  <strong>Skills:</strong> Enterprise Architecture, Code Quality, Testing, CI/CD, Agile Methodologies
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper aria-label="You are now in my technical portfolio section">
          <article>
            <h4>My Technical Portfolio</h4>
            <ul className="timeline">
              <li>
                <h4>Ugender's Technical Collection</h4>
                <p>
                  This is a curated collection of my technical projects, code samples, and development work. It showcases my expertise in React.js, JavaScript, and modern web technologies across various domains including enterprise applications, e-commerce, and real-time systems.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <a 
                    href="https://github.com/Ugender2729"
                  target="_blank"
                  rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--mark)',
                      color: 'var(--bg)',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: 'calc(var(--font-sm) + 0.5px)',
                      fontWeight: '500'
                    }}
                  >
                    Visit GitHub
                  </a>
                </div>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
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
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
    color: var(--cw);
    margin-bottom: 1rem;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
