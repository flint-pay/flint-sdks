import { d77 as c0, d1797 as c1, d1796 as c2, d2113 as c3, d2115 as c4, d2131 as c5, d2132 as c6, d14 as c7, d1520 as c8, d1522 as c9, d1521 as c10, d1523 as c11, d1524 as c12, d1795 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2115 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2115;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Report"]:c3(),["ReportResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec409"]:c8(),["SharedCodec410"]:c9(),["SharedCodec411"]:c10(),["SharedCodec412"]:c11(),["SharedCodec413"]:c12(),["SharedCodec485"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
