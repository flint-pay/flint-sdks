import { d8578 as c0, d8579 as c1, d8580 as c2, d8581 as c3, d8582 as c4 } from '../descriptors/data/383.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8604 as c5, d8605 as c6, d8606 as c7, d8607 as c8, d8608 as c9, d8609 as c10, d8610 as c11, d8611 as c12, d8612 as c13 } from '../descriptors/data/384.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8582 as d8582 } from '../descriptors/data/383.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8582;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec398"]:c5(),["SharedCodec399"]:c6(),["SharedCodec400"]:c7(),["SharedCodec401"]:c8(),["SharedCodec402"]:c9(),["SharedCodec403"]:c10(),["SharedCodec404"]:c11(),["SharedCodec405"]:c12(),["SharedCodec406"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
