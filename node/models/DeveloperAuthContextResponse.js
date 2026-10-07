import { d708 as c0, d709 as c1, d314 as c2, d1775 as c3, d1776 as c4, d2112 as c5, d2113 as c6, d14 as c7, d704 as c8, d705 as c9, d706 as c10, d707 as c11, d196 as c12, d1774 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d709 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["DeveloperAuthContextResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec208"]:c8(),["SharedCodec209"]:c9(),["SharedCodec210"]:c10(),["SharedCodec211"]:c11(),["SharedCodec34"]:c12(),["SharedCodec448"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContextResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
