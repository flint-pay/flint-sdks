import { d173 as c0 } from '../descriptors/data/8.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9733 as c1 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d173 as d173 } from '../descriptors/data/8.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionQuantityRequest"]:c0(),["SubscriptionQuantityChangeLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
