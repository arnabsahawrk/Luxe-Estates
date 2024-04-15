import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[23.777176, 90.399452]}
      zoom={13}
      className="w-full min-h-[400px] rounded-lg"
    >
      <TileLayer
        url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=oDAhxkF1pF3g66KnpXEo"
        attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
      />
      <Marker position={[23.793993, 90.404272]}>
        <Popup>
          Level-4, 34, Awal Centre <br /> Banani, Dhaka.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
