import { api } from "../api";

export const incentiveMainZoneListApi = (params) => {
    return api.post(
      `/api/driver-incentive/manage-zones-lists`,
      JSON.stringify(params),
      {
        headers: {
          "x-access-token": localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      }
    );
  };
  export const incentiveRideTypeListApi = (params) => {
    return api.post(
      `/api/driver-incentive/ride-type-lists`,
      JSON.stringify(params),
      {
        headers: {
          "x-access-token": localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      }
    );
  };
