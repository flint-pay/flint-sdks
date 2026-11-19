import { d746 as c0 } from '../descriptors/data/41.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d746 as d746 } from '../descriptors/data/41.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d746;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DispatchFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDispatchFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
