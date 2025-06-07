import html from './main.html';

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  },
};
