import Head from 'next/head';
import { GetStaticProps } from 'next';

import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PortfolioSection from '../components/home/PortfolioSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await import(`../locales/${locale}.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({
  content,
}: {
  content: typeof import('../locales/en.json');
}) {
  const {
    defaultSeo,
    heroData,
    aboutData,
    portfolioData,
    blogData,
    contactData,
  } = content;

  const { title, description, url, previewImage } = defaultSeo;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lại Minh Sáng",
    "alternateName": ["kaidev99", "Sang Lai"],
    "url": "https://yoonique99.vercel.app/",
    "image": previewImage, 
    "sameAs": [
      "https://github.com/sanglm2207",
      "https://www.linkedin.com/in/kaidev99",
      "https://facebook.com/kaidev99",
      "https://instagram.com/kaidev99"
    ],
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta
          content="Lại Minh Sáng, kaidev99, Sang Lai, Web Developer, Frontend Developer, Next.js Portfolio, ReactJS"
          name="keywords"
        />
        <meta content="English" name="language" />
        <meta content="Lại Minh Sáng (kaidev99)" name="author" />
        <link href="/favicon.ico" rel="icon" />

        <link rel="canonical" href="https://yoonique99.vercel.app/" />

        {/* Open Graph */}
        <meta key="ogtitle" content={title} property="og:title" />
        <meta key="ogdesc" content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta key="ogurl" content={url} property="og:url" />
        <meta key="ogimage" content={previewImage} property="og:image" />

        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </Head>

      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData} />
      <PortfolioSection portfolioData={portfolioData} />
      <BlogSection blogData={blogData} />
      <ContactSection contactData={contactData} />
    </>
  );
}
