import { IPlace } from "../interfaces/IPlace";
import { Place } from "../models/Place.model";

export async function getAllPlaces(): Promise<IPlace[]> {
  const places = await Place.find({});
  return places.map((place) => {
    return place.toJSON();
  });
}

export async function getPlaceById(id: string) {
  const place = await Place.findById(id);
  return place?.toJSON();
}

export async function createPlace(placeData: IPlace) {
  const place = new Place(placeData);
  return place.save();
}

export async function deletePlace(id: string) {
  const place = await Place.deleteOne({ _id: id });
  return place.deletedCount;
}

export async function updatePlace(
  id: string,
  placeData: IPlace
): Promise<IPlace | null> {
  const updatedPlace = await Place.findByIdAndUpdate(id, placeData, {
    new: true,
  });

  return updatedPlace;
}
