import { d314 as c0, d1775 as c1, d1776 as c2, d2108 as c3, d2109 as c4, d2110 as c5, d2112 as c6, d2113 as c7, d14 as c8, d20 as c9, d879 as c10, d1774 as c11, d2107 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2110 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2110;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResourceTimeline"]:c3(),["ResourceTimelineEntry"]:c4(),["ResourceTimelineResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec2"]:c9(),["SharedCodec242"]:c10(),["SharedCodec448"]:c11(),["SharedCodec501"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
