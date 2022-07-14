import toko1 from '../assets/images/toko1.png';
import toko2 from '../assets/images/toko2.png';
import toko3 from '../assets/images/toko3.png';
import toko4 from '../assets/images/toko4.png';
import toko5 from '../assets/images/toko5.png';

import tiktik1 from '../assets/images/tiktik1.png';
import tiktik2 from '../assets/images/tiktik2.png';

export const projects = [
  {
    id: 1,
    type: 'React',
    title: 'LiReddit',
    slug: 'lireddit',
    description: 'A clone of social media Reddit',
    thumbnail: 'https://i.ibb.co/bsGkHjk/lireddit1.png',
    images: [
      'https://i.ibb.co/bsGkHjk/lireddit1.png',
      'https://i.ibb.co/xjBZw3M/lireddit2.png',
      'https://i.ibb.co/6Rd9T2W/lireddit3.png',
      'https://i.ibb.co/2ct59Yf/lireddit4.png',
      'https://i.ibb.co/1dk8zT3/lireddit5.png',
      'https://i.ibb.co/2gQp1Wx/lireddit6.png',
      'https://i.ibb.co/tZDBNfx/lireddit7.png',
    ],
    fitures: [
      {
        title: 'Register, Login & Logout',
        description:
          'Using Redis sessions and database user can register, login & Logout and stay on the site as long as they want.',
      },
      {
        title: 'Reset password',
        description: 'User can change their password if they forgot it.',
      },
      {
        title: 'Create, Edit & Delete post',
        description:
          'User can post something in their mind or edit & delete post if user do wrong thing in their post.',
      },
      {
        title: 'Upvote & Downvote',
        description:
          'If user upload inappropriate things, other user can downvote it, vice versa.',
      },
      {
        title: 'Posts pagination',
        description:
          'To reduce bad connection experience we limited posts per page to 10.',
      },
    ],
    technologies: [
      'React',
      'Next',
      'JSX',
      'Chakra',
      'PostgresQL',
      'TypeORM',
      'GraphQL',
      'Apollo',
      'Redis',
    ],
  },
  {
    id: 2,
    type: 'React',
    title: 'AirBnB',
    slug: 'airbnb',
    description: 'A clone of AirBnB',
    thumbnail: 'https://i.ibb.co/hm8qkFD/airbnb1.png',
    images: [
      'https://i.ibb.co/hm8qkFD/airbnb1.png',
      'https://i.ibb.co/h9QCSMs/airbnb2.png',
      'https://i.ibb.co/f05bKVc/airbnb3.png',
      'https://i.ibb.co/nCXbN6Q/airbnb4.png',
    ],
    fitures: [
      {
        title: 'Search Destination',
        description:
          'User can search destination along with start-end date & number of guests',
      },
      {
        title: 'Responsive',
        description: 'User can access website on smaller or bigger device',
      },
    ],
    technologies: ['React', 'Next', 'JSX', 'Tailwind'],
  },
  {
    id: 3,
    type: 'Node JS',
    title: 'URL Shortener',
    slug: 'url-shortener',
    description: 'Make long URL shorter',
    thumbnail: 'https://i.ibb.co/bQcKYnk/urlshortener.png',
    images: ['https://i.ibb.co/bQcKYnk/urlshortener.png'],
    fitures: [
      {
        title: 'Shorten URL',
        description:
          'User can shorten their long url, e.g https://www.youtube.com/ to https://urlshortener/1',
      },
      {
        title: 'Go to URL with Shorten URL',
        description:
          'E.g when user go to https://urlshortener/1, website automaticly redirect user to https://www.youtube.com',
      },
    ],
    technologies: ['HTML', 'Node', 'Express', 'CORS', 'MongoDB'],
  },
  {
    id: 4,
    type: 'Laravel',
    title: 'Blog',
    slug: 'blog',
    description: 'Simple blogging website',
    thumbnail: 'https://i.ibb.co/kySh4Y1/blog1.png',
    images: [
      'https://i.ibb.co/kySh4Y1/blog1.png',
      'https://i.ibb.co/1qRjhHy/blog2.png',
      'https://i.ibb.co/VHw5Pg4/blog3.png',
      'https://i.ibb.co/sRk68kz/blog4.png',
      'https://i.ibb.co/dLdGWYW/blog5.png',
    ],
    fitures: [
      {
        title: 'Login, Register & Logout',
        description:
          'User can login/register and stay on website as long as they want if not logout.',
      },
      {
        title: 'Create, Edit & Delete Blog',
        description:
          'User can post something in their mind or edit & delete blog if user do wrong thing in their blog.',
      },
      {
        title: 'Search Blog',
        description: 'User can search blog by title or tag',
      },
    ],
    technologies: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
  },
  {
    id: 5,
    type: 'Laravel',
    title: 'Form',
    slug: 'form',
    description: 'Simple form website',
    thumbnail: 'https://i.ibb.co/dkmWLBP/form1.png',
    images: [
      'https://i.ibb.co/dkmWLBP/form1.png',
      'https://i.ibb.co/0jW3ck0/form2.png',
      'https://i.ibb.co/Y2HHLmH/form3.png',
      'https://i.ibb.co/tpKFbgJ/form4.png',
      'https://i.ibb.co/hgp8gr5/form5.png',
    ],
    fitures: [
      {
        title: 'Login, Register & Logout',
        description:
          'User can login/register and stay on website as long as they want if not logout.',
      },
      {
        title: 'Create, Edit & Delete Form',
        description:
          'User can make form and edit/delete the form, user can also set start & end date to form.',
      },
      {
        title: 'Submit Submissions',
        description: 'User can submit their submission by typing form slug.',
      },
    ],
    technologies: ['Laravel', 'Blade', 'MySQL', 'Tailwind', 'Form Builder'],
  },
  {
    id: 6,
    type: 'Laravel',
    title: 'TokoKu',
    slug: 'tokoku',
    description: 'Simple POS website',
    thumbnail: 'https://i.ibb.co/R0ydjX4/toko1.png',
    images: [
      'https://i.ibb.co/R0ydjX4/toko1.png',
      'https://i.ibb.co/X8ht0jy/toko2.png',
      'https://i.ibb.co/VBRP0SN/toko3.png',
      'https://i.ibb.co/kJdgfXS/toko4.png',
      'https://i.ibb.co/wJcZgH9/toko5.png',
    ],
    fitures: [
      {
        title: 'Login, Register & Logout',
        description:
          'User can login/register and stay on website as long as they want if not logout.',
      },
      {
        title: 'Create, Edit & Delete Category, Product, Supplier etc',
        description: 'User can create, edit/delete or export it to pdf.',
      },
      {
        title: 'Transaction',
        description: 'User can submit a transaction.',
      },
      {
        title: 'Cashier',
        description: 'Root User can add cashier to website.',
      },
    ],
    technologies: ['Laravel', 'Blade', 'MySQL', 'Bootstrap', 'Datatable'],
  },
  {
    id: 7,
    type: 'React',
    title: 'TikTik',
    slug: 'tiktik',
    description: 'A clone of TikTok',
    thumbnail: 'https://i.ibb.co/JcjFjMt/tiktik1.png',
    images: [
      'https://i.ibb.co/JcjFjMt/tiktik1.png',
      'https://i.ibb.co/zSPwd5L/tiktik2.png',
    ],
    fitures: [
      {
        title: 'Login & Logout',
        description:
          'User can login by google and stay on website as long as they want if not logout.',
      },
      {
        title: 'Create, Edit & Delete Post',
        description:
          'User can post something in their mind or edit & delete post if user do wrong thing in their post.',
      },
      {
        title: 'Search',
        description: 'User can search post or user.',
      },
    ],
    technologies: ['React', 'Next', 'Sanity', 'JWT', 'Tailwind'],
  },
];

export const getProject = (slug: any) => {
  let title;
  let description;
  let images: any = [];
  let fitures: any = [];
  let technologies: any = [];

  projects
    .filter((project) => project.slug === slug)
    .map((i) => {
      title = i.title;
      description = i.description;
      images = i.images;
      fitures = i.fitures;
      technologies = i.technologies;
    });

  return { title, description, images, fitures, technologies };
};
