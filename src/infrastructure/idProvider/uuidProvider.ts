import { v4 as uuid } from "uuid";
import { IdProvider } from "../../core/port/idProvider/idProvider.type";

export class UuidIdProvider implements IdProvider {
  getUniqueId(): string {
    return uuid();
  }
}
