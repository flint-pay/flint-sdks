import { d77 as c0, d1824 as c1, d1823 as c2, d2140 as c3, d2141 as c4, d2158 as c5, d2159 as c6, d14 as c7, d1546 as c8, d1548 as c9, d1547 as c10, d1549 as c11, d1550 as c12, d1822 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2141 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Report"]:c3(),["ReportListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec412"]:c8(),["SharedCodec413"]:c9(),["SharedCodec414"]:c10(),["SharedCodec415"]:c11(),["SharedCodec416"]:c12(),["SharedCodec488"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
