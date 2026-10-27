import { d3618 as c0 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3618 as d3618 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftLineItemInventoryDemandRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
