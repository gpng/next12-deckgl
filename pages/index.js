import { ScatterplotLayer } from "@deck.gl/layers";
import DeckGL from "@deck.gl/react";
import React from "react";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    name: "Colma (COLM)",
    code: "CM",
    address: "365 D Street, Colma CA 94014",
    exits: 4214,
    coordinates: [-122.466233, 37.684638],
  },
];

export default function Home() {
  const layer = new ScatterplotLayer({
    id: "scatterplot-layer",
    data,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: (d) => d.coordinates,
    getRadius: (d) => Math.sqrt(d.exits),
    getFillColor: (d) => [255, 140, 0],
    getLineColor: (d) => [0, 0, 0],
  });

  return (
    <div className="root">
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[layer]}
      />
      <style jsx>{`
        .root {
          height: 100vh;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
