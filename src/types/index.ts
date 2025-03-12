
export interface BannerSlide {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPrice?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  comment: string;
  rating: number;
}

export interface ConsultationForm {
  name: string;
  phone: string;
  serviceInterested: string;
}
