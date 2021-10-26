import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FarmSearchBox from './FarmSearchBox';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Marker } from './Marker';
import './styles/Map.css';

const Location = () => <div className="marker"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>;

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
            center: {
                lat: location.lat,
                lng: location.lng
            },
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
            isSearching: true,
            _selectedFarm: null
        })
        onSetLocation({
            lat,
            lng
        })
        onSelectFarm(null, 'map');
        ref.current.value = '';
    }

    render() {
        const { mapsApiLoaded, mapInstance, mapsapi, center } = this.state;
        const { farmList, onSelectFarm } = this.props;

        let markers = farmList.map(farm => {
            return <Marker key={farm.id} farm={farm} lat={farm.lat} lng={farm.lng} onSelectFarm={onSelectFarm} />
        })

        return (
            // Important! Always set the container height explicitly
            <Grid item xs={8}>
                <Paper variant="outlined">
                    <div style={{ height: '96vh', width: '100%' }}>
                        {mapsApiLoaded && <FarmSearchBox map={mapInstance} mapsapi={mapsapi} onPlacesChanged={(data, ref) => this.handleSearch(data, ref)} />}
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: '',
                                language: 'en'
                            }}
                            center={center}
                            defaultZoom={15}
                            onChildMouseEnter={this.onChildMouseEnter}
                            onChildMouseLeave={this.onChildMouseLeave}
                            onGoogleApiLoaded={({ map, maps }) => this.apiLoaded(map, maps)}
                            yesIWantToUseGoogleMapApiInternals
                        >
                            <Location
                                lat={center.lat + 0.001}
                                lng={center.lng}
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
