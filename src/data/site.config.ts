interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Cuba Bitcoin Community', // Site author
	title: 'Cuba Bitcoin Community', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es-ES',
	shareMessage: 'Comparte esta publicación', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
