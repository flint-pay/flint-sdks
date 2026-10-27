import { d3631 as c0, d3632 as c1 } from '../descriptors/data/150.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3632 as d3632 } from '../descriptors/data/150.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3632;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequest"]:c0(),["LineItemFulfillmentRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLineItemFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
