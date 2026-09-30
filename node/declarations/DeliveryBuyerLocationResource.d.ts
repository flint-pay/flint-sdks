
import type { DeliveryAddressResource } from './DeliveryAddressResource.js';
import type { DeliveryCoordinateRequest } from './DeliveryCoordinateRequest.js';

/** The normalized buyer address or coordinate used for this quote. */ export type DeliveryBuyerLocationResource = ({ "address"?: DeliveryAddressResource; "coordinate"?: DeliveryCoordinateRequest; "type": "address" | "coordinate" | (string & {}); }) & ((({ "type": ("address") & ("address"); "address": unknown; })) | (({ "type": ("coordinate") & ("coordinate"); "coordinate": unknown; })) | (object));
