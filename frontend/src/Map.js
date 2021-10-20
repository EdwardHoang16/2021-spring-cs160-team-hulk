import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchFarmList from './SearchFarmList';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// function embeddedMap() {
//     return (
//         <GoogleMap defaultZoom={10} defaultCenter={{ lat: 37.338207, lng: -121.886330 }} />
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(embeddedMap))

// export default function Map() {
//     return (

//         <Grid item xs={8}>
//             <Paper variant="outlined">
//                 {/* <img src={process.env.PUBLIC_URL + '/google_map.png'} /> */}
//                 <WrappedMap
//                     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places`}
//                     loadingElement={<div style={{ height: "100%" }} />}
//                     containerElement={<div style={{ height: "100%" }} />}
//                     mapElement={<div style={{ height: "100%" }} />}
//                 />
//             </Paper>
//         </Grid>

//     );
// }

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <Grid item xs={8}>
                <Paper variant="outlined">
                    <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={""}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </Paper></Grid>
        );
    }
}

export default Map;
