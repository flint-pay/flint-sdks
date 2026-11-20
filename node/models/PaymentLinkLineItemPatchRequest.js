import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8269 as c1, d8262 as c3 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10194 as c2 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10221 as c4, d10226 as c5, d10227 as c6 } from '../descriptors/data/478.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10230 as c7, d10231 as c8, d10232 as c9, d10233 as c10, d10234 as c11, d10235 as c12, d10236 as c13, d10237 as c14, d10238 as c15 } from '../descriptors/data/479.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10194 as d10194 } from '../descriptors/data/476.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2143"]:c4(),["SharedCodec2148"]:c5(),["SharedCodec2149"]:c6(),["SharedCodec2167"]:c7(),["SharedCodec2168"]:c8(),["SharedCodec2169"]:c9(),["SharedCodec2170"]:c10(),["SharedCodec2171"]:c11(),["SharedCodec2172"]:c12(),["SharedCodec2173"]:c13(),["SharedCodec2174"]:c14(),["SharedCodec2175"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
