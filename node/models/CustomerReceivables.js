import { d564 as c0, d565 as c1, d77 as c2 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d565 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerReceivableBalance"]:c0(),["CustomerReceivables"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerReceivables(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
