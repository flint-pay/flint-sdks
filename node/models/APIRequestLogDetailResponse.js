import { d22 as c0, d23 as c1, d26 as c2, d27 as c3, d24 as c4, d28 as c5, d323 as c6, d1823 as c7, d1824 as c8, d2178 as c9, d2179 as c10, d14 as c11, d20 as c12, d1822 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d23 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d23;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogDetail"]:c0(),["APIRequestLogDetailResponse"]:c1(),["APIRequestLogQueryParam"]:c2(),["APIRequestLogReproduction"]:c3(),["ApiRequestLogExpansionShape"]:c4(),["ApiRequestLogResponseShapeMetadata"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec2"]:c12(),["SharedCodec467"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogDetailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
