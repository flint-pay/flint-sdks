import { d74 as c0, d1834 as c1, d1940 as c2, d1932 as c3, d1931 as c4, d1934 as c5, d1933 as c6, d1936 as c7, d1935 as c8, d1937 as c9 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1940 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1940;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec499"]:c3(),["SharedCodec500"]:c4(),["SharedCodec501"]:c5(),["SharedCodec502"]:c6(),["SharedCodec503"]:c7(),["SharedCodec504"]:c8(),["SharedCodec505"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
