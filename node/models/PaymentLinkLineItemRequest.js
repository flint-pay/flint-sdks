import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8234 as c1, d8227 as c3 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10148 as c2 } from '../descriptors/data/467.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10173 as c4, d10178 as c5, d10179 as c6 } from '../descriptors/data/469.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10181 as c7, d10182 as c8, d10183 as c9, d10184 as c10, d10185 as c11 } from '../descriptors/data/470.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10190 as c12, d10191 as c13, d10192 as c14, d10193 as c15 } from '../descriptors/data/471.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10148 as d10148 } from '../descriptors/data/467.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2150"]:c4(),["SharedCodec2155"]:c5(),["SharedCodec2156"]:c6(),["SharedCodec2158"]:c7(),["SharedCodec2174"]:c8(),["SharedCodec2175"]:c9(),["SharedCodec2176"]:c10(),["SharedCodec2177"]:c11(),["SharedCodec2184"]:c12(),["SharedCodec2185"]:c13(),["SharedCodec2186"]:c14(),["SharedCodec2187"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
