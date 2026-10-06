import { d77 as c0, d1873 as c1, d1978 as c2, d1972 as c3, d1971 as c4, d1974 as c5, d1973 as c6, d1976 as c7, d1975 as c8, d1977 as c9, d41 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1978 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1978;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItem"]:c2(),["SharedCodec510"]:c3(),["SharedCodec511"]:c4(),["SharedCodec512"]:c5(),["SharedCodec513"]:c6(),["SharedCodec514"]:c7(),["SharedCodec515"]:c8(),["SharedCodec516"]:c9(),["SharedCodec6"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
