export interface IPlace {
  name: string;
  type: string;
  image: string;
  localization: {
    adress: string;
    altitude: string;
    longitude: string;
    link: string;
  };
  contact: {
    webLink: string;
    phone: string;
    instagram: string;
    facebook: string;
    email: string;
  };
}
