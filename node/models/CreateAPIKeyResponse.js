import { d19 as c0, d262 as c1, d77 as c2, d1830 as c3, d1829 as c4, d2164 as c5, d2165 as c6, d15 as c7, d14 as c8, d1828 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d262 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d262;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKeyWithSecret"]:c0(),["CreateAPIKeyResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec492"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
