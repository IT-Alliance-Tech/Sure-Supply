import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import * as driverAction from "../../redux/actions/manageDriversAction";
import errorToast from "../utilits/errorToast";
import InnerLayout from "../layout/innerLayout";
import LoadingSpinnerTable from "../utilits/loadingSpinnerTable";
import RideHistoryTable from "../similarTables/rideHistoryTable";
import { rejectedApplicantViewAction } from "../../redux/actions/rejectedApplicantAction";
import { blockedApplicantViewAction } from "../../redux/actions/manageDrivers/blockedApplicantAction";
import { bannedApplicantViewAction } from "../../redux/actions/manageDrivers/bannedApplicantAction";
import { expiredApplicantViewAction } from "../../redux/actions/expiredDocumentAction";
import { pendingApplicantViewAction } from "../../redux/actions/pendApplicantAction";
import {
  deleteDriverViewAction,
  permdeleteDriverViewAction,
} from "../../redux/actions/manageDrivers/deletedDriverAction";
import DriversProfileSidebar from "./driverProfileSidebar";
import { insertSpaceUnderScore } from "../helper";

const DriverRideHistory = ({ profileData, type }) => {
  const params = useParams();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState({ noOfItems: 0, noOfPages: 0 });
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState({ value: "" });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [driverTable, setDriverTable] = useState(false);
  const [numberOfFilters, setNumberOfFilters] = useState(0);

  const [driverData, setDriverData] = useState({
    driverDetails: {},
    rideHistoryTable: [],
  });

  const handleFilterClose = () => {
    setShowFilter(false);
  };
  const handleFilterOpen = () => {
    setShowFilter(true);
  };

  const handleSearch = (value) => {
    setNumberOfFilters(0);
    setSearch(value);
    for (let key in value) {
      if (value[key]) {
        setNumberOfFilters((prev) => prev + 1);
      }
    }
    setPage(0);
  };

  useEffect(() => {
    if (type === "manageDrivers") {
      setLoading(true);
      dispatch(
        driverAction.driverViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "rejectApplication") {
      setLoading(true);
      dispatch(
        rejectedApplicantViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "blockedDrivers") {
      setLoading(true);
      dispatch(
        blockedApplicantViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "bannedApplication") {
      setLoading(true);
      dispatch(
        bannedApplicantViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "expiredDocuments") {
      setLoading(true);
      dispatch(
        expiredApplicantViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "pendingRideHistory") {
      setLoading(true);
      dispatch(
        pendingApplicantViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "deletedDriverRideHistory") {
      setLoading(true);
      dispatch(
        deleteDriverViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    } else if (type === "permanentlyDeletedDriverRideHistory") {
      setLoading(true);
      dispatch(
        permdeleteDriverViewAction(
          {
            driver_id: params?.id,
            search: {
              booking_id_2: "",
              booking_classification: "",
              start_date: "",
              end_date: "",
            },
          },
          page,
          onSuccess,
          onError
        )
      );
    }
  }, [page, search, driverTable]);

  const onSuccess = (data) => {
    setLoading(false);
    setError(false);
    setDriverData({
      driverDetails: data?.data?.Driver_Profile,
      rideHistoryTable: data?.data?.Ride_History,
    });
    setPageData({
      noOfItems: data?.data?.count,
      noOfPages: data?.data?.pages,
    });
  };

  const onError = (data) => {
    setLoading(false);
    errorToast(data?.data?.data);
    setError(true);
    console.log("errror");
  };
  const statusList = [];

  if (type === "manageDrivers") {
    statusList.push({
      value: "Active",
      backGroundColor: "active_container",
    });
  } else if (type === "blockedDrivers") {
    statusList.push({
      value: "Blocked",
      backGroundColor: "blocked_active_container",
    });
  } else if (type === "rejectApplication") {
    statusList.push({
      value: "Rejected",
      backGroundColor: "inactive_container",
    });
  } else if (type === "bannedApplication") {
    statusList.push({
      value: "Banned",
      backGroundColor: "inactive_container",
    });
  } else if (type === "expiredDocuments") {
    statusList.push({
      value: "Expired Documents",
      backGroundColor: "inactive_container",
    });
  } else if (type === "pendingRideHistory") {
    statusList.push(
      {
        value: driverData?.driverDetails?.doc_status
          ? insertSpaceUnderScore(driverData?.driverDetails?.doc_status)
          : "",
        backGroundColor:
          driverData?.driverDetails?.doc_status === "New_application"
            ? "new_application_conatiner"
            : "re_approval_conatiner",
      },
      {
        value: driverData?.driverDetails?.doc_details,
        backGroundColor:
          driverData?.driverDetails?.doc_details === "Complete"
            ? "active_container"
            : "inactive_container",
      }
    );
  } else if (type === "deletedDriverRideHistory") {
    statusList.push({
      backGroundColor: "inactive_container",
      value: "Deleted",
    });
  } else if (type === "permanentlyDeletedDriverRideHistory") {
    statusList.push({
      value: "Permanently Deleted",
      backGroundColor: "inactive_container",
    });
  }

  console.log(driverData?.driverDetails?.driver_status, "Driver Status");

  function handlePagination(type) {
    if (type === "+") {
      if (page + 1 < pageData.noOfPages) setPage((prev) => prev + 1);
    } else if (type === "--") if (page > 0) setPage((prev) => prev - 1);
  }

  console.log(driverData?.driverDetails?.doc_details, "asdasdasd");

  return (
    <>
      {loading ? (
        <LoadingSpinnerTable />
      ) : (
        <InnerLayout
          mainHeading={` Driver ID - ${
            driverData?.driverDetails?.driver_id2
              ? driverData?.driverDetails?.driver_id2
              : "--"
          }`}
          statusList={statusList}
          backBtnClassName="ms-3"
        >
          <span className="d-flex align-items-center my-2 gap-1 ms-3 pb-2 main_heading_border_bottom"></span>
          <div className="row mt-4 ms-3">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <DriversProfileSidebar
                profileData={profileData}
                driverData={driverData}
                driverTable={driverTable}
                setDriverTable={setDriverTable}
                type={type}
              />
            </div>

            <div className="col-xl-9 col-lg-8 col-12 mt-sm-0 mt-5">
              <RideHistoryTable
                rideData={driverData?.rideHistoryTable}
                loading={loading}
                error={error}
                handlePagination={handlePagination}
                page={page}
                pageData={pageData}
              />
            </div>
          </div>
        </InnerLayout>
      )}
    </>
  );
};

export default DriverRideHistory;
