import { d8601 as c0, d8602 as c1, d8603 as c2, d8604 as c3, d8605 as c4 } from '../descriptors/data/383.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8629 as c5, d8630 as c6, d8631 as c7, d8632 as c8, d8633 as c9, d8634 as c10, d8635 as c11, d8636 as c12, d8637 as c13 } from '../descriptors/data/384.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8605 as d8605 } from '../descriptors/data/383.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8605;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec402"]:c5(),["SharedCodec403"]:c6(),["SharedCodec404"]:c7(),["SharedCodec405"]:c8(),["SharedCodec406"]:c9(),["SharedCodec407"]:c10(),["SharedCodec408"]:c11(),["SharedCodec409"]:c12(),["SharedCodec410"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
