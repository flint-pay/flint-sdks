import { d314 as c0, d1830 as c1, d1937 as c2, d1930 as c3, d1929 as c4, d1932 as c5, d1931 as c6, d1934 as c7, d1933 as c8, d1935 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1937 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1937;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec473"]:c3(),["SharedCodec474"]:c4(),["SharedCodec475"]:c5(),["SharedCodec476"]:c6(),["SharedCodec477"]:c7(),["SharedCodec478"]:c8(),["SharedCodec479"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
