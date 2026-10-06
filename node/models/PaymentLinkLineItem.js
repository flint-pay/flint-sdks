import { d77 as c0, d1847 as c1, d1952 as c2, d1946 as c3, d1945 as c4, d1948 as c5, d1947 as c6, d1950 as c7, d1949 as c8, d1951 as c9, d41 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1952 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItem"]:c2(),["SharedCodec508"]:c3(),["SharedCodec509"]:c4(),["SharedCodec510"]:c5(),["SharedCodec511"]:c6(),["SharedCodec512"]:c7(),["SharedCodec513"]:c8(),["SharedCodec514"]:c9(),["SharedCodec6"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
