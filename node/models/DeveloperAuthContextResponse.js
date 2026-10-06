import { d757 as c0, d758 as c1, d77 as c2, d1823 as c3, d1822 as c4, d2157 as c5, d2158 as c6, d14 as c7, d753 as c8, d754 as c9, d755 as c10, d756 as c11, d1821 as c12, d233 as c13 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d758 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["DeveloperAuthContextResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec242"]:c8(),["SharedCodec243"]:c9(),["SharedCodec244"]:c10(),["SharedCodec245"]:c11(),["SharedCodec487"]:c12(),["SharedCodec59"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContextResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
