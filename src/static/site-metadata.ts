interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workout Page',
  siteUrl: 'https://cyanpz.github.io/pz_workout/',
  logo: 'https://avatars.githubusercontent.com/u/9296308?s=96&v=4',
  description: 'Personal site and blog',
  navLinks: [],
};

export default data;
