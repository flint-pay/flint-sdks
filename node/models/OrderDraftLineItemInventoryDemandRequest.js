import { d5027 as c0 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5027 as d5027 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5027;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDraftLineItemInventoryDemandRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
