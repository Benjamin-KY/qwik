/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { renderToString, RenderToStringOptions, QwikLoader } from '@builder.io/qwik/server';
import { Main } from './main';

/**
 * Entry point for server-side pre-rendering.
 *
 * @returns a promise when all of the rendering is completed.
 */
export function render(opts: RenderToStringOptions) {
  return renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body q:base="/">
        <Main />
        <script>({fetchQwikBuilderContent.toString()})();</script>
        <QwikLoader debug={opts.debug} />
      </body>
    </html>,
    opts
  );
}

const fetchQwikBuilderContent = async () => {
  const qwikUrl = new URL('https://qa.builder.io/api/v1/qwik/page');
  // Demo API key for demonstration only. Please replace with your key
  qwikUrl.searchParams.set('apiKey', '5b8073f890b043be81574f96cfd1250b');
  qwikUrl.searchParams.set('userAttributes.urlPath', location.pathname);

  const response = await fetch(String(qwikUrl));
  const { html } = await response.json();
  document.querySelector('#my-content')!.innerHTML = html;
};
