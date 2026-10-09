import { d22 as c0, d23 as c1, d26 as c2, d27 as c3, d24 as c4, d28 as c5, d323 as c6, d1820 as c7, d1821 as c8, d2162 as c9, d2163 as c10, d14 as c11, d20 as c12, d1819 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d23 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d23;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogDetail"]:c0(),["APIRequestLogDetailResponse"]:c1(),["APIRequestLogQueryParam"]:c2(),["APIRequestLogReproduction"]:c3(),["ApiRequestLogExpansionShape"]:c4(),["ApiRequestLogResponseShapeMetadata"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec2"]:c12(),["SharedCodec466"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogDetailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
