import { d215 as c0, d77 as c1, d1873 as c2 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d215 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutQuickPayItemRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTax"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
