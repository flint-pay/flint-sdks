import { d8589 as c0, d8590 as c1, d8591 as c2, d8592 as c3, d8593 as c4 } from '../descriptors/data/382.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8615 as c5, d8616 as c6, d8617 as c7, d8618 as c8, d8619 as c9, d8620 as c10, d8621 as c11, d8622 as c12, d8623 as c13 } from '../descriptors/data/383.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8593 as d8593 } from '../descriptors/data/382.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec398"]:c5(),["SharedCodec399"]:c6(),["SharedCodec400"]:c7(),["SharedCodec401"]:c8(),["SharedCodec402"]:c9(),["SharedCodec403"]:c10(),["SharedCodec404"]:c11(),["SharedCodec405"]:c12(),["SharedCodec406"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
