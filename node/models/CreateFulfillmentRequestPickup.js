import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4523 as c1, d4524 as c2, d4525 as c4, d4526 as c5, d4527 as c7, d4528 as c8 } from '../descriptors/data/199.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d154 as c3 } from '../descriptors/data/7.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2999 as c6 } from '../descriptors/data/114.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3887 as c9, d3889 as c12 } from '../descriptors/data/164.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4548 as c10, d4549 as c11 } from '../descriptors/data/200.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4588 as c13 } from '../descriptors/data/203.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3044 as c14 } from '../descriptors/data/118.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d154 as d154 } from '../descriptors/data/7.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestPickup"]:c3(),["CreatePickupFulfillmentDetails"]:c4(),["CreateServiceFulfillmentDetails"]:c5(),["Dimensions"]:c6(),["FulfillmentLineItemRequest"]:c7(),["FulfillmentPackagingRequest"]:c8(),["FulfillmentRecipientRequest"]:c9(),["SharedCodec1140"]:c10(),["SharedCodec1141"]:c11(),["SharedCodec226"]:c12(),["SinglePackageCreateRequest"]:c13(),["Weight"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestPickup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
