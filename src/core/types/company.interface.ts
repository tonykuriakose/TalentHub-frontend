export type CompanyProfileStatus = "pending" | "verified" | "rejected";

export interface ICompanyProfile {
  id: string;
  userId: string;
  companyId: string;
  name: string;
  location: {
    country: string;
    city: string;
  };
  bio: string;
  image: string;
  founded: Date;
  industry: string;
  companyType: string;
  email: string;
  phone: string;
  website: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
  employeeCount: number;
  status: CompanyProfileStatus;
  workPlaceImages: string[];
  createdAt: Date;
  updatedAt: Date;
}

