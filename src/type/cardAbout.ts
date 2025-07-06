export type CardAbout = {
    yearStart: string,
    title: string,
    description?: string,
    yearEnd?: string,
    technology?: Array<string>,
}

export type ObjectCardAboutMe = {
    education: Array<CardAbout>,
    experience: Array<CardAbout>
}