import React from "react";
import { Map, Marker } from "pigeon-maps";

export default function MyMap() {
  return (
    <Map
      height={600}
      defaultCenter={[1.3011874029401413, 103.85696242360814]}
      defaultZoom={11}
    >
      <Marker width={50} anchor={[1.3011874029401413, 103.85696242360814]} />
    </Map>
  );
}
