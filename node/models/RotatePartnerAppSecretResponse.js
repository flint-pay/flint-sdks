import { d77 as c0, d1830 as c1, d1829 as c2, d1948 as c3, d2164 as c4, d2165 as c5, d2304 as c6, d14 as c7, d1828 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2304 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerAppSecretRotationResult"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["RotatePartnerAppSecretResponse"]:c6(),["SharedCodec1"]:c7(),["SharedCodec492"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
