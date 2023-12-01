

const data = [
    {
        id: 1,
        title: "DA/MD - Gọi về quá khứ ( Offical visualizer)",
        slug: 'goi-ve-qua-khu',
        category: ['3D environment', 'Graphic design', 'Visualizer'],
        description: 'A tranquil atmosphere for DA/MD new single',
        src: '/img/old_projects/gvqk.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "EREN - NATA w/ Taki ( prod shi ) I OFFICIAL AUDIO",
        slug: 'nata',
        category: ['Graphic designer', '3D modelling', 'Visualizer'],
        src: '/img/old_projects/nata.jpg',
        description: '',
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