
import type { DeliveryAddressResourceInput } from './DeliveryAddressResourceInput.js';
import type { DeliveryCoordinateRequestInput } from './DeliveryCoordinateRequestInput.js';

/** The normalized buyer address or coordinate used for this quote. */ export type DeliveryBuyerLocationResourceInput = ({ "address"?: DeliveryAddressResourceInput; "coordinate"?: DeliveryCoordinateRequestInput; "type": "address" | "coordinate"; }) & ((({ "type": ("address") & ("address"); "address": unknown; }) & ({ "coordinate"?: never })) | (({ "type": ("coordinate") & ("coordinate"); "coordinate": unknown; }) & ({ "address"?: never })));
