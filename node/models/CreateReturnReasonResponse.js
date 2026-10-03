import { d476 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2118 as c4, d2119 as c5, d2170 as c6, d2455 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d476 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d476;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReasonResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnReason"]:c6(),["UpdateReturnReasonResponse"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReasonResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
