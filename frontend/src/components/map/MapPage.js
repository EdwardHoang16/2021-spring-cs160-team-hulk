import React, { useState, useEffect, useCallback } from "react";
import SearchFarmList from "./SearchFarmList";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Map from "./Map";
import { listOfFarms } from "../../mock-data";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "98vh",
  overflowY: "scroll",
}));

export default function FarmSearchLocations() {
  const [farmList, setFarmList] = useState([]);
  // location is where the map should be
  const [location, setLocation] = useState({
    lat: 38,
    lng: -101,
  });
  // marker is the red marker on map
  const [marker, setMarker] = useState({
    lat: 38,
    lng: -101,
  });
  const [selectedFarm, setSelectedFarm] = useState(null);

  /**
   * Unable to get user's current location. In this case, we will set default location by using location of 1st item in farmList
   *
   * @param {*} error
   */
  const handleError = useCallback(
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
        default:
        // do nothing
      }

      if (farmList.length) {
        const [farm] = farmList;
        setLocation({
          lat: farm.lat,
          lng: farm.lng,
        });
        setMarker({
          lat: farm.lat,
          lng: farm.lng,
        });
      }
    },
    [farmList]
  );

  /**
   * Successfully get user's current location
   *
   * @param {object} location
   */
  const getLocation = (location) => {
    const { coords } = location;
    const { latitude, longitude } = coords;
    setLocation({
      lat: latitude,
      lng: longitude,
    });
    setMarker({
      lat: latitude,
      lng: longitude,
    });
  };

  useEffect(() => {
    // ComponentDidMount

    // Apply mock data. This should be removed by real API fetching below
    setFarmList(listOfFarms);

    // Call API to fetch data here

    // Get user's current location
    // @@NOTE: Only get user's current location when we are done fetching data. Therefore we should put below code inside fetching code
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLocation, handleError);
    }
  }, [farmList, handleError]);

  const selectFarm = useCallback(
    (id, type) => {
      if (id === selectedFarm) {
        const dataIdElements = document.querySelectorAll("[data-id]");
        dataIdElements.forEach((elm) => {
          elm.classList.remove("focus");
        });
      } else {
        const markers = document.querySelectorAll(".farm-marker");
        const buttons = document.querySelectorAll(".farm-table-item");
        markers.forEach((marker) => {
          const dataId = marker.getAttribute("data-id");
          if (Number(dataId) !== id) {
            marker.classList.remove("focus");
          } else {
            marker.classList.add("focus");
          }
        });

        buttons.forEach((button) => {
          const dataId = button.getAttribute("data-id");
          if (Number(dataId) !== id) {
            button.classList.remove("focus");
          } else {
            button.scrollIntoView({ behavior: "smooth", block: "start" });
            button.classList.add("focus");
          }
        });

        if (type === "table") {
          const farmItem = farmList.find((farm) => farm.id === id);
          setLocation({
            lat: farmItem.lat,
            lng: farmItem.lng,
          });
        }
        setSelectedFarm(id);
      }
    },
    [farmList, selectedFarm]
  );

  /**
   * This is called when using search feature to set new "location" and "red marker"
   *
   * @param {*} lat
   * @param {*} lng
   */
  const onSetLocation = (lat, lng) => {
    setLocation({
      lat,
      lng,
    });
    setMarker({
      lat,
      lng,
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Map
          farmList={farmList}
          location={location}
          marker={marker}
          onSelectFarm={selectFarm}
          selectedFarm={selectedFarm}
          onSetLocation={onSetLocation}
        />
        <Grid item xs={4}>
          <Item className="farm-list-table">
            <SearchFarmList farmList={farmList} onSelectFarm={selectFarm} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
