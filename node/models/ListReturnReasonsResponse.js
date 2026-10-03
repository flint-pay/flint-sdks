import { d1731 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2119 as c4, d2120 as c5, d2171 as c6 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1731 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1731;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnReasonsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnReason"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnReasonsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
