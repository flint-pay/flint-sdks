import { d314 as c0, d1775 as c1, d1776 as c2, d2034 as c3, d2094 as c4, d2095 as c5, d2112 as c6, d2113 as c7, d14 as c8, d1489 as c9, d1488 as c10, d1490 as c11, d1491 as c12, d1774 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2095 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2095;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["ReportListResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec367"]:c9(),["SharedCodec368"]:c10(),["SharedCodec369"]:c11(),["SharedCodec370"]:c12(),["SharedCodec448"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
