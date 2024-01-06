import { api } from "../api";

export const specialZoneListApi = (params) => {
  return api.post(
    `/api/manage_zone/find-all-special-defined-cities`,
    JSON.stringify(params),
    {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    }
  );
};
export const addSpecialZoneApi = (params) => {
  return api.post(`/api/manage_zone/add-special-zone`, (params), {
    headers: {
      "x-access-token": localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
  });
};
export const specialZoneViewApi = (params) => {
  return api.post(`/api/manage_zone/find-one-special-city`, JSON.stringify(params), {
    headers: {
      "x-access-token": localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
  });
};
export const updateSpecialZoneApi = (params) => {
  return api.post(`/api/manage_zone/update-special-zone`, (params), {
    headers: {
      "x-access-token": localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
  });
};
export const deleteSpecialZoneApi = (params) => {
  return api.post(`/api/manage_zone/delete-special-zone`, JSON.stringify(params), {
    headers: {
      "x-access-token": localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
  });
};