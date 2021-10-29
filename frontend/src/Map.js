import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FarmSearchBox from './FarmSearchBox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    faMapMarkerAlt,
    faMale,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import memoizeOne from 'memoize-one';
import { Marker } from './Marker';
import './styles/Map.css';

const RedMarker = () => <div className="marker"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>;

class Map extends Component {
    static defaultProps = {
        zoom: 100,
    };

    constructor(props) {
        super(props);
        const { location } = this.props;

        this.state = {
            mapsApiLoaded: false,
            mapInstance: null,
            mapsapi: null,
            center: JSON.parse(JSON.stringify(location)), // where the map should be
            _location: JSON.parse(JSON.stringify(location)), // where the red marker is
            shouldApplyProps: true,
            _selectedFarm: null,
            isSearching: false,
        };
    }

    static getDerivedStateFromProps(props, state) {
        const { center, shouldApplyProps, _selectedFarm, isSearching } = state;
        const { location, selectedFarm } = props;
        if ((center.lat !== location.lat || center.lng !== location.lng) && (shouldApplyProps || (_selectedFarm !== selectedFarm)) && !isSearching) {
            return {
                shouldApplyProps: false,
                _selectedFarm: selectedFarm,
                center: {
                    lat: location.lat,
                    lng: location.lng
                }
            }
        } else if (isSearching) {
            return {
                isSearching: false
            }
        }

        return null
    }

    apiLoaded = (map, maps) => {
        this.setState({
            mapsApiLoaded: true,
            mapInstance: map,
            mapsapi: maps,
        });
    }

    /**
     * Should be run only 1 time when the app has been loaded to apply lat and long to red marker
     *
     * @memberof Map
     */
    updateLocation = memoizeOne(
        (marker, _location) => {
            if (marker.lat !== _location.lat || marker.lng !== _location.lng)
                this.setState({ _location: marker })
        }
    )

    handleSearch(data, ref) {
        const { onSetLocation, onSelectFarm } = this.props
        const { location } = data[0].geometry;
        const lat = location.lat();
        const lng = location.lng();
        this.setState({
            center: {
                lat,
                lng
            },
            _location: {
                lat,
                lng
            },
            isSearching: true,
            _selectedFarm: null
        })
        onSetLocation(lat, lng)
        onSelectFarm(null, 'map');
        ref.current.value = '';
    }

    getRedMarkerBack() {
        const { _location } = this.state;
        const { onSelectFarm, onSetLocation } = this.props;
        this.setState({
            center: JSON.parse(JSON.stringify(_location))
        })
        onSetLocation(_location.lat, _location.lng)
        onSelectFarm(null, 'map');
    }

    render() {
        const { mapsApiLoaded, mapInstance, mapsapi, center, _location } = this.state;
        const { farmList, onSelectFarm, marker } = this.props;

        this.updateLocation(marker, _location);

        let markers = farmList.map(farm => {
            return <Marker key={farm.id} farm={farm} lat={farm.lat} lng={farm.lng} onSelectFarm={onSelectFarm} />
        })

        return (
            // Important! Always set the container height explicitly
            <Grid item xs={8}>
                <Paper variant="outlined">
                    <div className="map-wrapper">
                        {mapsApiLoaded && <FarmSearchBox map={mapInstance} mapsapi={mapsapi} onPlacesChanged={(data, ref) => this.handleSearch(data, ref)} />}
                        <button className="btn-marker" onClick={() => this.getRedMarkerBack()}><FontAwesomeIcon icon={faMale} /></button>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: 'AIzaSyB4iv4WFatScZofidFmwL7btq3TZVcXGbo',
                                language: 'en'
                            }}
                            center={center}
                            defaultZoom={15}
                            onChildMouseEnter={this.onChildMouseEnter}
                            onChildMouseLeave={this.onChildMouseLeave}
                            onGoogleApiLoaded={({ map, maps }) => this.apiLoaded(map, maps)}
                            yesIWantToUseGoogleMapApiInternals
                        >
                            <RedMarker
                                lat={_location.lat + 0.001}
                                lng={_location.lng}
                            />
                            {markers}
                        </GoogleMapReact>
                    </div>
                </Paper>
            </Grid>
        );
    }
}
// https://github.com/google-map-react/google-map-react/issues/460 =
export default Map;