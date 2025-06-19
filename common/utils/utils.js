import { Types } from "mongoose";

export const objectId = Types.ObjectId;

export default class Utils {
  static objectId = Types.ObjectId;

  static isValidDate = (dateToFilter) => {
    const date = new Date(dateToFilter);
    return !isNaN(date.getTime());
  };
}


