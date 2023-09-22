import axios from "axios";
import {HOST} from "./config";

export async function getOrphanageDetails() {
  try {
    const response = await axios.get(`${HOST}/dashboard/OrphanageDetails`);
    return response.data;
  } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch orphanage details');
  }
}

export async function getChildDetails() {
  try {
    const response = await axios.get(`${HOST}/dashboard/ChildDetails`);
    return response.data;
  } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch child details');
  }
}

export async function getFundDetails() {
    try {
      const response = await axios.get(`${HOST}/dashboard/FundDetails`);
      return response.data;
    } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch fund details');
    }
}

export async function getInquiryDetails() {
    try {
      const response = await axios.get(`${HOST}/dashboard/InquiryDetails`);
      return response.data;
    } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch inquiry details');
    }
}

export async function getWorkersDetails() {
    try {
      const response = await axios.get(`${HOST}/dashboard/WorkersDetails`);
      return response.data;
    } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch worker details');
    }
}

export async function getUserDetails() {
    try {
      const response = await axios.get(`${HOST}/dashboard/UserDetails`);
      return response.data;
    } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch user details');
    }
}


