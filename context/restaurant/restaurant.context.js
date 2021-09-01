<<<<<<< HEAD
import React, {createContext, useState, useEffect, useContext} from 'react';
import {restaurantRequest, restaurantTransform} from './restaurant.service';
import {LocationContext} from '../locations/location.context';
=======
import React, { createContext, useState, useEffect, useContext } from 'react';
import { restaurantRequest, restaurantTransform } from './restaurant.service';
import { LocationContext } from '../locations/location.context';
import { locationRequest } from '../locations/location.service';
>>>>>>> 3ae148fa6dff9b6b091932581aa9fa8b46114b73
export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { location, keyWord, setKeyWord } = useContext(LocationContext);

  const getRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      const locString = `${location.lat},${location.lng}`;

      restaurantRequest(locString)
        .then(restaurantTransform)
        .then(response => {
          setRestaurants(response);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
        });
    }, 2000);
  };

  useEffect(() => {
    getRestaurants();
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
