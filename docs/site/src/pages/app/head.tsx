import { partytownSnippet } from '@builder.io/partytown/integration';
import { PageProps } from '../../types';

export const Head = (page: PageProps) => (
  // TODO: Why is a <Host> required here?
  <>
    <meta charSet="utf-8" />

    <title>Docs</title>

    <link rel="canonical" href={getCanonical(page)} />

    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />

    <meta name="viewport" content="width=device-width" />
    <meta name="apple-mobile-web-app-title" content="Qwik" />
    <meta name="application-name" content="Qwik" />
    <meta name="theme-color" content="#ffffff" />

    <meta name="twitter:site" content="@QwikDev" />
    <meta name="twitter:creator" content="@QwikDev" />
    <meta name="twitter:description" content="Web Framework focusing on Time-to-Interactive." />
    <meta name="twitter:card" content="summary" />

    <script innerHTML={partytownSnippet()} />
    <script type="text/partytown">console.debug("🎉");</script>
  </>
);

const getCanonical = (page: PageProps) => {
  const url = new URL(page.url);
  url.protocol = 'https:';
  url.hash = '';
  url.search = '';
  let href = url.href;
  if (url.pathname !== '/' && href.endsWith('/')) {
    href = href.substring(0, href.length - 2);
  }
  return href;
};