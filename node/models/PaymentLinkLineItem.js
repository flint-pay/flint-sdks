import { d74 as c0, d1834 as c1, d1938 as c2, d1932 as c3, d38 as c4, d1931 as c5, d1934 as c6, d1933 as c7, d1936 as c8, d1935 as c9, d1937 as c10 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1938 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1938;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItem"]:c2(),["SharedCodec499"]:c3(),["SharedCodec5"]:c4(),["SharedCodec500"]:c5(),["SharedCodec501"]:c6(),["SharedCodec502"]:c7(),["SharedCodec503"]:c8(),["SharedCodec504"]:c9(),["SharedCodec505"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
