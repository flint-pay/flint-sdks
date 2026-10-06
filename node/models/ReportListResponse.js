import { d77 as c0, d1823 as c1, d1822 as c2, d2139 as c3, d2140 as c4, d2157 as c5, d2158 as c6, d14 as c7, d1545 as c8, d1547 as c9, d1546 as c10, d1548 as c11, d1549 as c12, d1821 as c13 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2140 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["Report"]:c3(),["ReportListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec411"]:c8(),["SharedCodec412"]:c9(),["SharedCodec413"]:c10(),["SharedCodec414"]:c11(),["SharedCodec415"]:c12(),["SharedCodec487"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
