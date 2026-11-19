import { d8700 as c0 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8700 as d8700 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftLineItemInventoryDemandRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
