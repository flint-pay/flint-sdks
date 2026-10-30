import { d588 as c0 } from '../descriptors/data/30.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d588 as d588 } from '../descriptors/data/30.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d588;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
