import { d323 as c0, d1823 as c1, d1824 as c2, d2100 as c3, d2160 as c4, d2161 as c5, d2178 as c6, d2179 as c7, d14 as c8, d1536 as c9, d1535 as c10, d1537 as c11, d1538 as c12, d1822 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2161 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PublicDownload"]:c3(),["Report"]:c4(),["ReportListResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec386"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11(),["SharedCodec389"]:c12(),["SharedCodec467"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
