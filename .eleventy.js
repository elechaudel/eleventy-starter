module.exports = function(eleventyConfig) {
    
    eleventyConfig.addWatchTarget("./_src/_sass/");
    eleventyConfig.addPassthroughCopy("./_src/css");
    eleventyConfig.addPassthroughCopy({"./_src/_fonts": "fonts"});
    eleventyConfig.addPassthroughCopy({"./_src/_media": "media"});

    // Layouts
    eleventyConfig.addLayoutAlias('base', '_layouts/base.njk');

    // Markdown parsing to html
	const md = require('markdown-it') ({
		html: false,
		breaks: true,
		linkify: true
	});
	eleventyConfig.addNunjucksFilter("markdownify", markdownString => md.render(markdownString));

    return {
        dir: {
            input: "_src",
            output: "_site"
        },
        htmlTemplateEngine: "njk"
    }
}