import { d77 as c0, d1874 as c1, d1980 as c2, d1973 as c3, d1972 as c4, d1975 as c5, d1974 as c6, d1977 as c7, d1976 as c8, d1978 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1980 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1980;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec511"]:c3(),["SharedCodec512"]:c4(),["SharedCodec513"]:c5(),["SharedCodec514"]:c6(),["SharedCodec515"]:c7(),["SharedCodec516"]:c8(),["SharedCodec517"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
