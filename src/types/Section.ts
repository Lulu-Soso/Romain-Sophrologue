export interface Section {
  title: string;
  subtitle: string;
  titleIcon: JSX.Element;
  titleBackgroundImage: string;
  definitionTitle: string;
  definitionDescription?: string;
  benefitsTitle?: string;
  benefitsList: Array<string>;
  otherTitle?: string;
  otherList?: Array<string>;
  image?: string;
}
