import { d595 as c0 } from '../descriptors/data/33.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8591 as c1, d8592 as c2 } from '../descriptors/data/382.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8620 as c3, d8621 as c4, d8623 as c5 } from '../descriptors/data/383.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d595 as d595 } from '../descriptors/data/33.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d595;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputPickupLocationCollection"]:c0(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c2(),["SharedCodec403"]:c3(),["SharedCodec404"]:c4(),["SharedCodec406"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
