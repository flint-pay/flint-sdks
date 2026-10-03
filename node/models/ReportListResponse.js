import { d74 as c0, d1784 as c1, d1783 as c2, d2101 as c3, d2102 as c4, d2118 as c5, d2119 as c6, d1514 as c7, d1516 as c8, d1515 as c9, d1517 as c10, d1518 as c11 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2102 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2102;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Report"]:c3(),["ReportListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec404"]:c7(),["SharedCodec405"]:c8(),["SharedCodec406"]:c9(),["SharedCodec407"]:c10(),["SharedCodec408"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
