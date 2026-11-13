export type FeatureIconName =
  | "panel"
  | "automation"
  | "instrument"
  | "code"
  | "box";

export type ProductCategoryId =
  | "all"
  | "panel"
  | "plc"
  | "hmi"
  | "drive"
  | "instrument"
  | "network";

export interface ContactPerson {
  name: string;
  role?: string;
  phone: string;
}

export interface CompanyInfo {
  nameFa: string;
  nameEn: string;
  tagline: string;
  phone: string;
  email?: string;
  contacts: ContactPerson[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  text: string;
  icon: FeatureIconName;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  text: string;
  image: string;
  imagePos?: string;
  details: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: Exclude<ProductCategoryId, "all">;
  featured: boolean;
  text: string;
  image: string;
  imagePos?: string;
}

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  industry: string;
  text: string;
  image: string;
  imagePos?: string;
  highlights?: string[];
  featured?: boolean;
}

export interface ValueItem {
  title: string;
  text: string;
  icon: "target" | "wrench" | "shield" | "users";
}

export interface ActivityArea {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
}
