export type SeekerSubscriptioPlan = "free" | "basic" | "premium";

export interface ISeekerSubscription {
    plan: SeekerSubscriptioPlan;
    jobApplicationsPerMonth: number;
    canMessageAnyone: boolean;
    startDate: Date;
    endDate: Date;
}

export interface ISeekerSubscriptionUsage {
    jobApplicationsUsed: number;
    lastUpdated: Date;
}

export type CompanySubscriptioPlan = "free" | "basic" | "premium";

export interface ICompanySubscription {
    plan: CompanySubscriptioPlan;
    jobPostLimit: number;
    applicantionAccessLimit: number; 
    startDate: Date;
    endDate: Date;
}

export interface ICompanySubscriptionUsage {
    id: string;
    userId: string;
    jobsPosted: number; 
    applicantionAccessed: number; 
    applicationIdsAccessed: string[] | null; 
    lastUpdated: Date;
}