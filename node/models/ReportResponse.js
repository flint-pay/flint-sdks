import { d323 as c0, d1820 as c1, d1821 as c2, d2083 as c3, d2144 as c4, d2146 as c5, d2162 as c6, d2163 as c7, d14 as c8, d1534 as c9, d1533 as c10, d1535 as c11, d1536 as c12, d1819 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2146 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2146;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["ReportResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec385"]:c9(),["SharedCodec386"]:c10(),["SharedCodec387"]:c11(),["SharedCodec388"]:c12(),["SharedCodec466"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
