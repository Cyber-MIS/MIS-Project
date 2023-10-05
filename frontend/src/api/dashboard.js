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

export async function addOrphanage(orphanage) {
  try {
    const response = await axios.post(`${HOST}/dashboard/addOrphanage`, orphanage);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to add orphanage');
  }
}

export async function getOrphanageByID(ID){
  try {
    const response = await axios.get(`${HOST}/dashboard/OrphanageDetails/${ID}`);
    return response.data;
  } catch (err) {
        console.log(err);
        return await Promise.reject('Failed to fetch orphanage details');
  }
}

export async function updateOrphanage(orphanage) {
  try {
    const response = await axios.put(`${HOST}/dashboard/updateOrphanage`, orphanage);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to update orphanage');
  }
}

export async function deleteOrphanage(ID) {
  try {
    const response = await axios.delete(`${HOST}/dashboard/deleteOrphanage/${ID}`);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to delete orphanage');
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

export async function addChild(child) {
  try {
    const response = await axios.post(`${HOST}/dashboard/addChild`, child);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to add child');
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

export async function addFund(fund) {
  try {
    const response = await axios.post(`${HOST}/dashboard/addFund`, fund);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to add fund');
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

export async function addInquiry(inquiry) {
  try {
    const response = await axios.post(`${HOST}/dashboard/addInquiry`, inquiry);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to add inquiry');
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

export async function addWorker(worker) {
  try {
    const response = await axios.post(`${HOST}/dashboard/addWorker`, worker);
    return response.data;
  } catch (err) {
      console.log(err);
      return await Promise.reject('Failed to add worker');
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
