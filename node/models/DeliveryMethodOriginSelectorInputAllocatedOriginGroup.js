import { d593 as c0 } from '../descriptors/data/33.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8589 as c1, d8590 as c2 } from '../descriptors/data/382.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8619 as c3, d8620 as c4, d8621 as c5 } from '../descriptors/data/383.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d593 as d593 } from '../descriptors/data/33.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroup"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c2(),["SharedCodec402"]:c3(),["SharedCodec403"]:c4(),["SharedCodec404"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
