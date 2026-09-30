
import type { DeliveryAddressRequest } from './DeliveryAddressRequest.js';
import type { DeliveryCoordinateRequest } from './DeliveryCoordinateRequest.js';

export type DeliveryBuyerLocationRequest = ({ "address"?: DeliveryAddressRequest; "coordinate"?: DeliveryCoordinateRequest; "type": "address" | "coordinate" | (string & {}); }) & ((({ "type": ("address") & ("address"); "address": unknown; })) | (({ "type": ("coordinate") & ("coordinate"); "coordinate": unknown; })) | (object));
