

const data = [
    {
        id: 1,
        title: "Shod Nguyen",
        slug: 'shod-nguyen',
        category: ['Graphic designer', 'Artist'],
        description: 'Art offers us another language when other languages fail.',
        src: '/img/thumbnail/1.png',
        overlay: 6
    },
    {
        id: 2,
        title: "Tung Nguyen Minh",
        slug: 'tung-nguyen',
        category: ['Graphic designer', 'Artist'],
        src: '/img/thumbnail/3.jpg',
        description: 'A young kid tryin to make sure his plans work.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Shod Nguyen",
        slug: 'shod-nguyen',
        src: '/img/thumbnail/2.jpg',
        category: ['Visual'],
        description: 'Art offers us another language when other languages fail.',
        overlay: 6
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};