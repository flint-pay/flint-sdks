import { d274 as c0, d331 as c1, d339 as c2, d428 as c3, d446 as c4, d503 as c5, d801 as c6, d335 as c7, d808 as c8, d70 as c9, d2233 as c10, d336 as c11, d338 as c12, d337 as c13, d2286 as c14, d2287 as c15 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d339 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryFulfillmentDetails"]:c0(),["CreateDigitalFulfillmentDetails"]:c1(),["CreateFulfillmentRequest"]:c2(),["CreatePackageRequest"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["FulfillmentLineItemRequest"]:c6(),["FulfillmentPackagingRequest"]:c7(),["FulfillmentRecipient"]:c8(),["PostalAddress"]:c9(),["ReturnShipmentLineItemAllocation"]:c10(),["SharedCodec111"]:c11(),["SharedCodec112"]:c12(),["SharedCodec113"]:c13(),["ShippingDimensions"]:c14(),["ShippingWeight"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
