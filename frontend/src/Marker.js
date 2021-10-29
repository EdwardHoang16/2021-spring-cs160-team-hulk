import React from 'react';
import {
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Marker.css';

export const Marker = (props) => {
    const { farm, onSelectFarm } = props;

    return (
        <div className="farm-marker marker" data-id={farm.id} onClick={() => onSelectFarm(farm.id, 'map')}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div className="farm__info hide">
                <div className="farm__title">{farm.title}</div>
                <div className="farm__address">{farm.address}</div>
            </div>
        </div>
    )
}