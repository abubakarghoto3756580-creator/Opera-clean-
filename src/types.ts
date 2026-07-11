export type Language = "ar" | "en";

export interface Branch {
  id: string;
  nameAr: string;
  nameEn: string;
  phone: string;
  phoneCall: string;
  addressAr: string;
  addressEn: string;
}

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  priceAr?: string;
  priceEn?: string;
  imageUrl: string;
  iconName: string;
}

export interface SubscriptionPlan {
  id: string;
  price: number; // Y KD
  value: number; // X + Y KD total value
  bonus: number; // X KD free value
  isBestValue?: boolean;
}

export interface WhyChooseUsItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}
