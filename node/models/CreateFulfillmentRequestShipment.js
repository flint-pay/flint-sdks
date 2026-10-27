import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4523 as c1, d4524 as c2, d4525 as c4, d4526 as c5, d4527 as c7, d4528 as c8 } from '../descriptors/data/199.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d156 as c3 } from '../descriptors/data/7.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2999 as c6 } from '../descriptors/data/114.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3887 as c9, d3889 as c12 } from '../descriptors/data/164.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4548 as c10, d4549 as c11 } from '../descriptors/data/200.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4588 as c13 } from '../descriptors/data/203.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3044 as c14 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d156 as d156 } from '../descriptors/data/7.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestShipment"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["Dimensions"]:c6(),["FulfillmentLineItemRequest"]:c7(),["FulfillmentPackagingRequest"]:c8(),["FulfillmentRecipientRequest"]:c9(),["SharedCodec1140"]:c10(),["SharedCodec1141"]:c11(),["SharedCodec226"]:c12(),["SinglePackageCreateRequest"]:c13(),["Weight"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestShipment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
