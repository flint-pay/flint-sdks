import { d74 as c0, d1836 as c1, d1942 as c2, d1935 as c3, d1934 as c4, d1937 as c5, d1936 as c6, d1939 as c7, d1938 as c8, d1940 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1942 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1942;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec499"]:c3(),["SharedCodec500"]:c4(),["SharedCodec501"]:c5(),["SharedCodec502"]:c6(),["SharedCodec503"]:c7(),["SharedCodec504"]:c8(),["SharedCodec505"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
