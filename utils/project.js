import liredditThumbnail from "../assets/images/lireddit.png";
import lireddit1 from "../assets/images/lireddit1.png";
import lireddit2 from "../assets/images/lireddit2.png";
import lireddit3 from "../assets/images/lireddit3.png";
import lireddit4 from "../assets/images/lireddit4.png";
import lireddit5 from "../assets/images/lireddit5.png";
import lireddit6 from "../assets/images/lireddit6.png";
import lireddit7 from "../assets/images/lireddit7.png";

export const projects = [
  {
    id: 1,
    type: "React",
    title: "LiReddit",
    slug: "lireddit",
    thumbnail: liredditThumbnail,
    images: [
      lireddit1,
      lireddit2,
      lireddit3,
      lireddit4,
      lireddit5,
      lireddit6,
      lireddit7,
    ],
    fitures: [
      [
        "Register, Login & Logout",
        "Using Redis sessions and database user can register, login & Logout and stay on the site as long as they want.",
      ],
      ["Reset password", "User can change their password if they forgot it."],
      [
        "Create, Edit & Delete post",
        "User can post something in their mind or edit & delete post if user do wrong thing in their post.",
      ],
      [
        "Upvote & Downvote",
        "If user upload inappropriate things, other user can downvote it, vice versa.",
      ],
      [
        "Posts pagination",
        "To reduce bad connection experience we limited posts per page to 10",
      ],
    ],
    technologies: [
      "Next",
      "JSX",
      "Chakra",
      "PostgresQL",
      "TypeORM",
      "GraphQL",
      "Apollo",
      "Redis",
    ],
    description: "A clone of social media Reddit",
  },
];

export const getProject = (slug) => {
  return projects.filter((project) => project.slug === slug);
};
