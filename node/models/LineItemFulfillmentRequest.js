import { d1752 as c0, d1753 as c1, d1754 as c2, d1755 as c3 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1753 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequest"]:c0(),["LineItemFulfillmentRequest"]:c1(),["LineItemFulfillmentSizeRequest"]:c2(),["LineItemFulfillmentWeightRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLineItemFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
