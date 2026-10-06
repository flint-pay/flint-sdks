import { d486 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2209 as c6, d14 as c7, d1821 as c8, d2496 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d486 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReasonResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnReason"]:c6(),["SharedCodec1"]:c7(),["SharedCodec487"]:c8(),["UpdateReturnReasonResponse"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReasonResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
