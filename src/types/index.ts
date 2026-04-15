
export type ExperienceCardParams = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type TechnologiesParams = {
  name: string;
  icon: string;
};

export type ProjectsParams = {
  name: string;
  description: string;
  tags: {
    name: string;
    backgroundColor: string;
  }[];
  image: string;
  source_code_link?: string;
  live?: string;
};

export type TestimonialParams = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type PackagesParams = {
  name: string;
  image: string;
  version: string;
  github_url: string;
  npm_url: string;
};
