import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import og_images from "lume/plugins/og_images.ts";
import favicon from "lume/plugins/favicon.ts";
import image_size from "lume/plugins/image_size.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import seo from "lume/plugins/seo.ts";
import minify_html from "lume/plugins/minify_html.ts";

const site = lume();

site.use(
  unocss({
    // deno-lint-ignore no-explicit-any
    options: { containers: { maxWidth: "1280px" } } as any,
    cssFile: "/assets/styles/utils.css",
    reset: "tailwind-compat",
  }),
);
site.use(lightningcss());
site.use(og_images());
site.use(favicon({ input: "/assets/images/logo.svg" }));
site.use(image_size());
site.use(metas());
site.use(sitemap());
site.use(seo());
site.use(minify_html());

site.ignore("README.md");
site.add([".svg", ".png"]);
site.add("/assets/styles/main.css");
site.add(
  "npm:vanilla-tilt@^1.8.1/dist/vanilla-tilt.min.js",
  "/assets/js/dist/vanilla-tilt.min.js",
);

export default site;
