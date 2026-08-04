/**
 * Project portfolio data.
 *
 * Photos live in ../assets/portfolio/<folder>/<folder>-NN.jpg and are picked up
 * eagerly so the ordering in the folder (01 = cover) is the slideshow ordering.
 */

const PORTFOLIO_IMAGES = import.meta.glob<string>(
  "../assets/portfolio/**/*.jpg",
  { eager: true, import: "default" },
);

function imagesFor(folder: string): string[] {
  return Object.keys(PORTFOLIO_IMAGES)
    .filter((path) => path.includes(`/portfolio/${folder}/`))
    .sort()
    .map((path) => PORTFOLIO_IMAGES[path]);
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  /** Sector label used for the card badge and the filter on /projects */
  category: string;
  years: string;
  developer?: string;
  mainContractor?: string;
  packageContractor: string;
  /** Berra's package on the job */
  scope: string[];
  /** One-line blurb for the project card */
  summary: string;
  /** Full write-up shown in the modal */
  overview: string[];
  keyWorks?: string[];
  images: string[];
}

/** Newest first – the homepage highlights the first six. */
export const PROJECTS: Project[] = [
  {
    slug: "brighton-student-accommodation",
    title: "Brighton Student Accommodation",
    location: "Brighton",
    category: "Student Accommodation",
    years: "2025–2026",
    mainContractor: "Balfour Beatty",
    packageContractor: "ASH",
    scope: ["Internal Partitions"],
    summary:
      "Internal partition systems throughout a major student accommodation development.",
    overview: [
      "Berra completed the installation of internal partition systems for a major student accommodation development in Brighton. Working under ASH, our experienced team delivered the works safely, efficiently and in accordance with the project specification and programme.",
    ],
    images: imagesFor("brighton"),
  },
  {
    slug: "bexhill-mental-health-hospital",
    title: "Bexhill Mental Health Hospital",
    location: "Bexhill",
    category: "Healthcare",
    years: "2024–2026",
    mainContractor: "Kier",
    packageContractor: "ASH",
    scope: ["Steel Framed Systems (SFS)", "Internal Partitions"],
    summary:
      "SFS and internal partitions for a new-build mental health hospital.",
    overview: [
      "Berra completed the installation of Steel Framed Systems (SFS) and internal partition systems for the new Bexhill Mental Health Hospital. Working under ASH, our experienced team delivered the project safely, efficiently and in accordance with the project specification and programme.",
    ],
    images: imagesFor("bexhill"),
  },
  {
    slug: "harris-academy-sutton",
    title: "Harris Academy Sutton",
    location: "Sutton",
    category: "Education",
    years: "2021–2022",
    mainContractor: "Willmott Dixon",
    packageContractor: "ASH",
    scope: ["Internal Partitions", "Timber Slatted Ceiling Installation"],
    summary:
      "Internal partitions and architectural timber slatted ceilings for a flagship academy.",
    overview: [
      "Berra completed the installation of internal partition systems and architectural timber slatted ceiling systems at Harris Academy Sutton. Working under ASH, our team delivered the project with precision, maintaining the highest standards of workmanship while meeting the project programme and specification.",
    ],
    keyWorks: [
      "Internal partition installation",
      "Architectural timber slatted ceiling installation",
      "High-quality finishes",
      "Safe and efficient project delivery",
    ],
    images: imagesFor("sutton"),
  },
  {
    slug: "frank-towell-court",
    title: "Frank Towell Court",
    location: "Feltham",
    category: "Residential",
    years: "2021–2022",
    mainContractor: "Willmott Dixon",
    packageContractor: "ASH",
    scope: ["Steel Framed Systems (SFS)", "Internal Partitions"],
    summary:
      "SFS and internal partitions across a residential development in Feltham.",
    overview: [
      "Berra completed the installation of Steel Framed Systems (SFS) and internal partition systems at Frank Towell Court. Working under ASH, our experienced team delivered the project safely, efficiently and to the highest quality standards.",
    ],
    images: imagesFor("feltham"),
  },
  {
    slug: "royal-exchange-kingston",
    title: "Royal Exchange",
    location: "Kingston",
    category: "Residential",
    years: "2019–2021",
    developer: "St George (Berkeley Group)",
    packageContractor: "ASH",
    scope: ["Steel Framed Systems (SFS)"],
    summary:
      "Steel Framed Systems as part of the drylining package for St George.",
    overview: [
      "Berra completed the installation of Steel Framed Systems (SFS) as part of the drylining package at the Royal Exchange development in Kingston. Working under ASH, our team delivered the works safely, accurately and in accordance with the project specification and programme.",
    ],
    images: imagesFor("kingston"),
  },
  {
    slug: "maritime-museum-conservation-centre",
    title: "Maritime Museum Conservation Centre",
    location: "Kidbrooke",
    category: "Conservation",
    years: "2016–2017",
    mainContractor: "Willmott Dixon",
    packageContractor: "ASH",
    scope: ["Steel Framed Systems (SFS)", "Internal Partitions"],
    summary:
      "SFS and internal partitions for a specialist conservation facility.",
    overview: [
      "Berra carried out the installation of Steel Framed Systems (SFS) and internal partition systems for the Maritime Museum Conservation Centre. Working under ASH, our team delivered the works with precision, quality workmanship and close coordination throughout the construction programme.",
    ],
    images: imagesFor("kidbrooke"),
  },
  {
    slug: "saffron-square",
    title: "Saffron Square",
    location: "Croydon",
    category: "Residential",
    years: "2011–2016",
    developer: "Berkeley Homes",
    packageContractor: "ASH",
    scope: ["Internal Partitions"],
    summary:
      "Internal partitions for the landmark Saffron Square development in Croydon.",
    overview: [
      "Berra completed the installation of internal partition systems as part of the drylining package at the landmark Saffron Square development in Croydon. Working under ASH, our team delivered high-quality workmanship while meeting the project specification and programme.",
    ],
    images: imagesFor("saffron-square"),
  },
];

/** The six projects highlighted on the homepage. */
export const FEATURED_PROJECTS = PROJECTS.slice(0, 6);
