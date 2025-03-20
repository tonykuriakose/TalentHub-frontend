import axios from "@core/lib/axios";
import { IJobApplication, IJobApplicationWithCompanyProfile, JobApplicationStatus } from "@core/types/job.application.interface";
import { IPaginationResponse } from "@core/types/pagination.interface";
import { apiWrapper } from "@core/utils/helper";

const baseUrl = '/jobs';

interface CreateJobAppplication {
    jobId: string;
    fullName: string;
    email: string;
    phone?: string;
    coverLetter?: string;
    resume: string;
}

export const applyJob = async (data: CreateJobAppplication): Promise<IJobApplication> => {
    return (await apiWrapper(axios.post<IJobApplication>(`${baseUrl}/apply`, data))).data;
};

export const reApplyJob = async (id: string): Promise<{message: string}> => {
    return (await apiWrapper(axios.post<{message: string}>(`${baseUrl}/re-apply/${id}`))).data;
};

export const withdrawJobApplication = async (id: string): Promise<{message: string}> => {
    return (await apiWrapper(axios.put<{message: string}>(`${baseUrl}/withdraw-application/${id}`))).data;
};

export const getApplicationDetails = async (id: string): Promise<IJobApplication> => {
    return (await apiWrapper(axios.get<IJobApplication>(`${baseUrl}/application/${id}`))).data;
};

export const acceptJobOffer = async (id: string): Promise<void> => {
    return (await apiWrapper(axios.put<void>(`${baseUrl}/application/${id}/accept-offer`))).data;
};

export const rejectJobOffer = async (id: string): Promise<void> => {
    return (await apiWrapper(axios.put<void>(`${baseUrl}/application/${id}/reject-offer`))).data;
};

export const getMyJobApplications = async (filter: {
    page: number;
    limit: number;
    query?: string;
    status?: JobApplicationStatus;
  }): Promise<IPaginationResponse<IJobApplicationWithCompanyProfile>> => {
    const { page, limit, query, status } = filter;
  
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
  
    if (query) {
      params.append("query", query);
    }
  
    if (status) {
      params.append("status", status);
    }
  
    const url = `${baseUrl}/my-applications?${params.toString()}`;
  
    return (await apiWrapper(axios.get<IPaginationResponse<IJobApplicationWithCompanyProfile>>(url))).data;
  };
  