import React, { useEffect, useRef, useState } from 'react';
import './Navigation.css';

const Navigation = ({ latitude, longitude }) => {

  function haversine(lat1, lon1, lat2, lon2) {
    const toRadians = (degree) => degree * (Math.PI / 180);

    const R = 6371; 
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
              
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c;
    return distance;
}

const gyms = [
  {
    title: "Kalinga Fitness Gym",
    rating: "4.3(5)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9439059050,
    lat: 20.290882,
    long: 85.772070
  },
  {
    title: "Spartan Fitness Club",
    rating: "4.7(90)",
    opens: "6:00 AM",
    closes: "5:30 PM",
    phone: 7978819694,
    lat: 20.270817,
    long:  85.761484
  },
  {
    title: "Gold's Gym",
    rating: "4.4(300+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9437001234,
    lat: 19.3200,
    long: 84.7902
  },
  {
    title: "Fitness World",
    rating: "4.2(150+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 9437509876,
    lat: 19.3190,
    long: 84.7920
  },
  {
    title: "24 Seven Fitness",
    rating: "4.5(200+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 8895001234,
    lat: 19.3150,
    long: 84.7880
  },
  {
    title: "Fit India Gym",
    rating: "4.1(100+)",
    opens: "5:00 AM",
    closes: "9:00 PM",
    phone: 9779999876,
    lat: 19.3180,
    long: 84.7930
  },
  {
    title: "Stark The Muscle Factory",
    rating: "4.8(400+)",
    opens: "6:00 AM",
    closes: "6:00 PM",
    phone: 7008184461,
    lat: 20.266147,
    long: 85.759982
  },
  {
    title: "Fitness Park",
    rating: "4.3(100+)",
    opens: "5:30 AM",
    closes: "9:00 PM",
    phone: 6742354818,
    lat: 20.278186,
    long: 85.794844
  },
  {
    title: "The Iron Fist Gym",
    rating: "4.9(41)",
    opens: "6:00 AM",
    closes: "5:00 PM",
    phone: 9556515701,
    lat: 20.258181,
    long: 85.794242
  },
  {
    title: "Gold's Gym Bhubaneswar",
    rating: "4.5(100+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9937023340,
    lat: 20.311769,
    long: 85.819593
  },
  {
    title: "Talwalkars Hi-Fi Bhubaneswar",
    rating: "4.4(200+)",
    opens: "5:00 AM",
    closes: "9:00 PM",
    phone: 9238105022,
    lat: 20.296059,
    long: 85.818389
  },
  {
    title: "Sky Fitness Gym",
    rating: "4.2(50+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9040024382,
    lat: 20.291278,
    long: 85.824827
  },
  {
    title: "Oxyzone Fitness Club",
    rating: "4.6(70+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 8093064422,
    lat: 20.270512,
    long: 85.816733
  },
  {
    title: "Tru Fitness Bhubaneswar",
    rating: "4.5(60+)",
    opens: "5:00 AM",
    closes: "9:30 PM",
    phone: 9861040404,
    lat: 20.296751,
    long: 85.819434
  },
  {
    title: "FitX Fitness Studio",
    rating: "4.3(30+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9337239609,
    lat: 20.296020,
    long: 85.831730
  },
  {
    title: "Body Line Gym",
    rating: "4.0(40+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 9338707874,
    lat: 20.275220,
    long: 85.816530
  },
  {
    title: "Fitness Zone Gym",
    rating: "4.1(25+)",
    opens: "5:00 AM",
    closes: "9:00 PM",
    phone: 8093968319,
    lat: 20.303450,
    long: 85.827070
  },
  {
    title: "The Fitness House",
    rating: "4.2(45+)",
    opens: "6:00 AM",
    closes: "9:30 PM",
    phone: 9437007029,
    lat: 20.293394,
    long: 85.830812
  },
  {
    title: "GymX Bhubaneswar",
    rating: "4.5(80+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 7381472748,
    lat: 20.299860,
    long: 85.843610
  },
  {
    title: "Snap Fitness Bhubaneswar",
    rating: "4.6(100+)",
    opens: "5:00 AM",
    closes: "10:00 PM",
    phone: 9337108101,
    lat: 20.305256,
    long: 85.821289
  },
  {
    title: "Endurance Fitness Club",
    rating: "4.3(55+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 8895629629,
    lat: 20.298742,
    long: 85.813477
  },
  {
    title: "Core Fitness Gym",
    rating: "4.2(50+)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9040024382,
    lat: 20.302018,
    long: 85.815372
  },
  {
    title: "Lifestyle Fitness",
    rating: "4.4(75+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 8763061252,
    lat: 20.297229,
    long: 85.824972
  },
  {
    title: "Rhythm Fitness Center",
    rating: "4.3(35+)",
    opens: "5:00 AM",
    closes: "9:00 PM",
    phone: 8658056790,
    lat: 20.301156,
    long: 85.829673
  },
  {
    title: "Iron House Gym",
    rating: "4.1(20+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 7064207860,
    lat: 20.290380,
    long: 85.831212
  },
  {
    title: "Galaxy Fitness Gym",
    rating: "4.0(30+)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9861033639,
    lat: 20.287191,
    long: 85.826530
  },
  {
    title: "Dream Fitness",
    rating: "4.2(60+)",
    opens: "6:00 AM",
    closes: "9:30 PM",
    phone: 7008745912,
    lat: 20.295691,
    long: 85.819010
  },
  {
    title: "Athletic Club Bhubaneswar",
    rating: "4.4(70+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9938339798,
    lat: 20.303146,
    long: 85.817809
  },
  {
    title: "Powerhouse Gym Bhubaneswar",
    rating: "4.5(50+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 9078986231,
    lat: 20.311859,
    long: 85.836262
  },
  {
    title: "Muscle Planet Gym",
    rating: "4.3(35+)",
    opens: "5:00 AM",
    closes: "9:30 PM",
    phone: 8280082244,
    lat: 20.287200,
    long: 85.811751
  },
  {
    title: "Shape Up Fitness Studio",
    rating: "4.4(55+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9437605225,
    lat: 20.281725,
    long: 85.825022
  },
  {
    title: "Pump It Fitness",
    rating: "4.2(40+)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9861234567,
    lat: 20.289112,
    long: 85.820751
  },
  {
    title: "FitPoint Bhubaneswar",
    rating: "4.5(85+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 7992234561,
    lat: 20.298123,
    long: 85.831245
  },
  {
    title: "Barbell Club Mumbai",
    rating: "4.7(120+)",
    opens: "5:00 AM",
    closes: "10:00 PM",
    phone: 9819282838,
    lat: 19.076090,
    long: 72.877426
  },
  {
    title: "The Space Gym",
    rating: "4.8(150+)",
    opens: "6:00 AM",
    closes: "11:00 PM",
    phone: 9820282828,
    lat: 19.018207,
    long: 72.830428
  },
  {
    title: "Nitrro Bespoke Fitness",
    rating: "4.5(200+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9867822222,
    lat: 19.075984,
    long: 72.877656
  },
  {
    title: "Fitness First Delhi",
    rating: "4.6(180+)",
    opens: "6:00 AM",
    closes: "11:00 PM",
    phone: 9811100000,
    lat: 28.704060,
    long: 77.102493
  },
  {
    title: "Gold's Gym Delhi",
    rating: "4.7(150+)",
    opens: "5:30 AM",
    closes: "10:30 PM",
    phone: 9810101010,
    lat: 28.614879,
    long: 77.209137
  },
  {
    title: "Talwalkars Gym Delhi",
    rating: "4.4(120+)",
    opens: "5:00 AM",
    closes: "9:00 PM",
    phone: 9911100000,
    lat: 28.629779,
    long: 77.216721
  },
  {
    title: "Cult.Fit Bangalore",
    rating: "4.5(200+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9900088800,
    lat: 12.971599,
    long: 77.594566
  },
  {
    title: "Snap Fitness Bangalore",
    rating: "4.6(160+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 9880101010,
    lat: 12.927880,
    long: 77.627650
  },
  {
    title: "The Tribe Fitness Club",
    rating: "4.4(140+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9900000099,
    lat: 13.035542,
    long: 77.597100
  },
  {
    title: "Bodyline Fitness Kolkata",
    rating: "4.5(180+)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9830040404,
    lat: 22.572645,
    long: 88.363892
  },
  {
    title: "Talwalkars Hi-Fi Kolkata",
    rating: "4.6(140+)",
    opens: "6:00 AM",
    closes: "9:30 PM",
    phone: 9830020202,
    lat: 22.554781,
    long: 88.343262
  },
  {
    title: "Gold's Gym Kolkata",
    rating: "4.7(160+)",
    opens: "5:00 AM",
    closes: "10:00 PM",
    phone: 9830030303,
    lat: 22.582245,
    long: 88.413224
  },
  {
    title: "Fitness One Chennai",
    rating: "4.5(170+)",
    opens: "5:00 AM",
    closes: "10:00 PM",
    phone: 9840044444,
    lat: 13.082680,
    long: 80.270721
  },
  {
    title: "O2 Health Studio Chennai",
    rating: "4.6(130+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9840030303,
    lat: 13.060422,
    long: 80.245671
  },
  {
    title: "Talwalkars Gym Chennai",
    rating: "4.4(150+)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9840050505,
    lat: 13.082840,
    long: 80.270180
  },
  {
    title: "Anytime Fitness Hyderabad",
    rating: "4.6(180+)",
    opens: "6:00 AM",
    closes: "11:00 PM",
    phone: 9988776655,
    lat: 17.385044,
    long: 78.486671
  },
  {
    title: "F45 Training Hyderabad",
    rating: "4.7(160+)",
    opens: "5:00 AM",
    closes: "9:30 PM",
    phone: 9988998899,
    lat: 17.421332,
    long: 78.457342
  },
  {
    title: "Snap Fitness Hyderabad",
    rating: "4.5(150+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9888776655,
    lat: 17.426777,
    long: 78.408045
  },
  {
    title: "FitNest Gym Lucknow",
    rating: "4.5(100+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9988770000,
    lat: 26.846708,
    long: 80.946159
  },
  {
    title: "Spartan Fitness Noida",
    rating: "4.6(90+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9999888877,
    lat: 28.535516,
    long: 77.391026
  },
  {
    title: "Gold's Gym Ghaziabad",
    rating: "4.7(120+)",
    opens: "5:30 AM",
    closes: "9:30 PM",
    phone: 9988772211,
    lat: 28.669156,
    long: 77.453758
  },
  {
    title: "Fitness First Ahmedabad",
    rating: "4.6(150+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9925000000,
    lat: 23.022505,
    long: 72.571365
  },
  {
    title: "Body Sculptor Gym Surat",
    rating: "4.5(100+)",
    opens: "6:00 AM",
    closes: "9:30 PM",
    phone: 9911223344,
    lat: 21.170240,
    long: 72.831062
  },
  {
    title: "Talwalkars Gym Vadodara",
    rating: "4.4(120+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 9911991199,
    lat: 22.310696,
    long: 73.192635
  },
  {
    title: "Fitness Center Trivandrum",
    rating: "4.5(90+)",
    opens: "6:00 AM",
    closes: "9:00 PM",
    phone: 9898989898,
    lat: 8.524139,
    long: 76.936638
  },
  {
    title: "Snap Fitness Kochi",
    rating: "4.6(110+)",
    opens: "5:30 AM",
    closes: "10:00 PM",
    phone: 9898098765,
    lat: 9.931233,
    long: 76.267303
  },
  {
    title: "Gold's Gym Calicut",
    rating: "4.7(130+)",
    opens: "6:00 AM",
    closes: "10:00 PM",
    phone: 9898765432,
    lat: 11.258753,
    long: 75.780411
  }
];


const filteredGyms = gyms.filter(gym => {
  const distance = haversine(
    latitude || 20.275271, 
    longitude || 85.778165,
    gym.lat,
    gym.long
  ).toFixed(3);
  gym.dist=distance
  return distance <= 5;
});

  console.log(filteredGyms)


  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const center = {
        lat: latitude || 20.275271, 
        lng: longitude || 85.778165,
      };

      mapRef.current = new window.google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 13,
      });

      markerRef.current = new window.google.maps.Marker({
        position: center,
        map: mapRef.current,
        title: "Your Location",
      });
      
      
      filteredGyms.forEach(gym => {
        const marker = new window.google.maps.Marker({
          position: { lat: gym.lat, lng: gym.long },
          map: mapRef.current,
          title: gym.title,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          },
        });

        // marker.addListener('click', () => {
        //   setSelectedPlace(gym);
        // });
      });

      // markerRef.current.addListener('click', () => {
      //   setSelectedPlace(center);
      // });
    }
  }, [latitude, longitude]); 

  return (
    <div className="map-container">
      <div id="map" className="map"></div>
      {selectedPlace && (
        <div className="info-window">
          <h4>Your Location</h4>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <button onClick={() => setSelectedPlace(null)}>Close</button>
        </div>
      )}
    <div className="content">
        {filteredGyms.length > 0 ? (
          filteredGyms.map((gym, index) => (
            <div key={index} className="gym-card">
              <h2>{gym.title}</h2>
              <p>Rating: {gym.rating}</p>
              <p>Opens: {gym.opens}</p>
              <p>Closes: {gym.closes}</p>
              <p>Phone: {gym.phone}</p>
              <p>Distance: {gym.dist} km</p>
            </div>
          ))
        ) : (
          <p>No gyms found within 6 km.</p>
        )}
      </div>
    </div>
  );
};

export default Navigation;
