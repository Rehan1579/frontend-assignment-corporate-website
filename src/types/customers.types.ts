export interface CustomerTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CustomersContent {
  title: string;
  description: string;
  testimonials: CustomerTestimonial[];
}
