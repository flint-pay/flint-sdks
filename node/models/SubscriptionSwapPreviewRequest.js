import { d9624 as c0 } from '../descriptors/data/442.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9624 as d9624 } from '../descriptors/data/442.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9624;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionSwapPreviewRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionSwapPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
