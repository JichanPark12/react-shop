interface Content {
  title: string;
  info: string;
}
interface CarouselCategory {
  imgUrl: string;
  content: Content;
  url: string;
}

export const carouselCategory: Array<CarouselCategory> = [
  {
    imgUrl: '/electronics.jpeg',
    content: { title: '내용', info: '내용' },
    url: 'electronics',
  },
  { imgUrl: '/jewelery.jpg', content: { title: '내용', info: '내용' }, url: 'jewelery' },
  {
    imgUrl: "/men's clothing.jpeg",
    content: { title: '내용', info: '내용' },
    url: "men's clothing",
  },
  {
    imgUrl: "/women's clothing.jpg",
    content: { title: '내용', info: '내용' },
    url: "women's clothing",
  },
];
