import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Astro Learner | Bayz Blog',
        description: "Mon voyage d'apprentissage d'Astro",
        site: 'https://tutorial-astro-bayz.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>fr-fr</language>`,
    });
}