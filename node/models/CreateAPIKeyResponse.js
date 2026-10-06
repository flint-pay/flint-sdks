import { d19 as c0, d261 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d15 as c7, d14 as c8, d1821 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d261 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKeyWithSecret"]:c0(),["CreateAPIKeyResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec487"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
