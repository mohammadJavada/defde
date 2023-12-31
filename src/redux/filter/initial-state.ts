import { InitialType } from "./initial-type";

export const initialState: InitialType = {
  shownCars:[],
  brand: [],
  model: [],
  type: [],
  min_price: -1,
  max_price: -1,
  min_Mileage: -1,
  max_Mileage: -1,
  colors: [],
  carDamage: [],
  gear_box_types: [],
  fuel_types: [],
  min_year_of_manufacture: -1,
  max_year_of_manufacture: -1,
  previewData: [],
  showNull: false,
  showNullButton: false,
  byDefault: false,
  with_image: false,
  insurances: {
    BodyInsurance: false,
    ThirdPartyInsurance: false,
    CarAccidentInsurance: false,
    InternationalCarInsurance: false,
  },
  mapData: {
    longitude: 35.6892,
    latitude: 51.389,
  },
  distance: -1,
  sort: "",
  ascending: true,
};
