import { d77 as c0, d1873 as c1, d1980 as c2, d1972 as c3, d1971 as c4, d1974 as c5, d1973 as c6, d1976 as c7, d1975 as c8, d1977 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1980 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1980;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec510"]:c3(),["SharedCodec511"]:c4(),["SharedCodec512"]:c5(),["SharedCodec513"]:c6(),["SharedCodec514"]:c7(),["SharedCodec515"]:c8(),["SharedCodec516"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
