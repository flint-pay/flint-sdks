import { d6558 as c0 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6558 as d6558 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6558;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftLineItemInventoryDemandRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
