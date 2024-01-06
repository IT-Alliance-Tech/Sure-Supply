import React, { useState } from "react";
import { useNavigate } from "react-router";
import Switch from "react-switch";
import StatusChangeModal from "../rideType-vehicleType/rideType-source/status-change-modal";
import usePermissions from "../usePermissionChecker";

const ManageFaresLayout = ({
  children,
  location,
  navBarList,
  PathName,
  mainNavigate = "",
  edit = false,
  statusChange = false,
  params,
}) => {
  const { canWrite } = usePermissions();
  const id = params?.split("&");
  const zone_id = id?.[0];
  const zone_status = localStorage?.getItem("zone_status");

  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [statusValue, setStatusValue] = useState(
    zone_status === "Inactive" ? false : zone_status === "Active" ? true : null
  );
  const handleStatusChange = (nextChecked) => {
    return setChecked(nextChecked);
  };
  const [statusChangeShow, setstatusChangeShowShow] = useState(false);
  const handleStatusChangeClose = () => setstatusChangeShowShow(false);
  const handleStatusChangeShow = () => setstatusChangeShowShow(true);
  return (
    <>
      <StatusChangeModal
        statusChangeShow={statusChangeShow}
        handleStatusChangeClose={handleStatusChangeClose}
        handleStatusChange={handleStatusChange}
        setChecked={setChecked}
        setStatusValue={setStatusValue}
        statusValue={statusValue}
        zone_id={zone_id}
        zone_status={zone_status}
      />
      <div className="default_fare_container  p-3 pb-4 mx-3 my-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <button
              className="back_icon"
              onClick={() => {
                navigate(mainNavigate);
              }}
            >
              <i className="ri-arrow-left-s-line fs_30 fw_700 primary_color"></i>
            </button>
            <span className="primary_color fw_600 fs_21 ">{location}</span>
          </div>
          {statusChange ? (
            <div className="d-flex justify-content-center align-items-center gap-2 grey_color_bg p-2 border_radius_7px">
              <div className="d-flex align-items-center">
                <span
                  className={
                    statusValue
                      ? "disabled_color fs_14 fw_500 me-2"
                      : "red_color fs_14 fw_600 me-2"
                  }
                >
                  Inactive
                </span>

                <Switch
                  onChange={handleStatusChangeShow}
                  checked={statusValue}
                  offColor="#F600003"
                  offHandleColor="#ed0b0b"
                  onColor="#70ad47"
                  onHandleColor="#00ab2e"
                  handleDiameter={25}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="none"
                  activeBoxShadow="none"
                  height={15}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                  disabled={canWrite("manage_fares") === false}
                />
                <span
                  className={
                    statusValue
                      ? "green_color fs_14 fw_500 ms-1"
                      : "disabled_color fs_14 fw_600 ms-1"
                  }
                >
                  Active
                </span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="manage_fare_list_container mt-4">
          <div className=" manage_fare_heading_container d-flex  py-2  text-nowrap primary_bg border_radius">
            {navBarList?.map((item) => {
              return (
                <button
                  onClick={() => {
                    navigate(item?.navigation, {
                      state: { fare: item?.fare, edit: edit },
                    });
                  }}
                  className={
                    PathName === item?.value
                      ? " cursor-pointer text-decoration-none background_none  px-5 border_right border-top-0 border-start-0 border-bottom-0  fw_500 tertiary_color"
                      : `cursor-pointer text-decoration-none fw_500 white_color fs_16 px-5 border_right  border-top-0 border-start-0 border-bottom-0   background_none`
                  }
                  key={item?.navigation}
                  disabled={PathName === item?.value}
                >
                  {item?.label}
                </button>
              );
            })}
          </div>
          <div className="mx-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ManageFaresLayout;
