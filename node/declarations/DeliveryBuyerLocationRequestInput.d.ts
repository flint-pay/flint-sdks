
import type { DeliveryAddressRequestInput } from './DeliveryAddressRequestInput.js';
import type { DeliveryCoordinateRequestInput } from './DeliveryCoordinateRequestInput.js';

export type DeliveryBuyerLocationRequestInput = ({ "address"?: DeliveryAddressRequestInput; "coordinate"?: DeliveryCoordinateRequestInput; "type": "address" | "coordinate"; }) & ((({ "type": ("address") & ("address"); "address": unknown; }) & ({ "coordinate"?: never })) | (({ "type": ("coordinate") & ("coordinate"); "coordinate": unknown; }) & ({ "address"?: never })));
