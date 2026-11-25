import { d8237 as c0, d8235 as c20, d8236 as c23 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9050 as c1 } from '../descriptors/data/407.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9051 as c2, d9052 as c5, d9053 as c6, d9054 as c8, d9055 as c9, d9056 as c10, d9057 as c13, d9058 as c14, d9059 as c15, d9060 as c18, d9061 as c19, d9062 as c21, d9063 as c22 } from '../descriptors/data/408.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d292 as c3 } from '../descriptors/data/15.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9102 as c4, d9103 as c12, d9105 as c16, d9104 as c24, d9100 as c25 } from '../descriptors/data/411.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8784 as c7, d8785 as c26 } from '../descriptors/data/392.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c11 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9106 as c17 } from '../descriptors/data/412.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d292 as d292 } from '../descriptors/data/15.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestPickup"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec1288"]:c13(),["SharedCodec1289"]:c14(),["SharedCodec1290"]:c15(),["SharedCodec1291"]:c16(),["SharedCodec1292"]:c17(),["SharedCodec1296"]:c18(),["SharedCodec1297"]:c19(),["SharedCodec2"]:c20(),["SharedCodec2887"]:c21(),["SharedCodec2888"]:c22(),["SharedCodec3"]:c23(),["SharedCodec519"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestPickup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
