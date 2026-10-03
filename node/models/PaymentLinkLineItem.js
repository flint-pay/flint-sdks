import { d74 as c0, d1836 as c1, d1941 as c2, d1935 as c3, d38 as c4, d1934 as c5, d1937 as c6, d1936 as c7, d1939 as c8, d1938 as c9, d1940 as c10 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1941 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItem"]:c2(),["SharedCodec499"]:c3(),["SharedCodec5"]:c4(),["SharedCodec500"]:c5(),["SharedCodec501"]:c6(),["SharedCodec502"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec505"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
