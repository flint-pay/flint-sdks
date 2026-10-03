import { d19 as c0, d20 as c1, d23 as c2, d24 as c3, d21 as c4, d25 as c5, d74 as c6, d1784 as c7, d1783 as c8, d2119 as c9, d2120 as c10 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d20;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLogDetail"]:c0(),["APIRequestLogDetailResponse"]:c1(),["APIRequestLogQueryParam"]:c2(),["APIRequestLogReproduction"]:c3(),["ApiRequestLogExpansionShape"]:c4(),["ApiRequestLogResponseShapeMetadata"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogDetailResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
