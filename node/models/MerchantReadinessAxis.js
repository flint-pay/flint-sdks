import { d1799 as c0, d1823 as c1, d1822 as c2, d14 as c3, d1821 as c4 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1799 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1799;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantReadinessAxis"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["SharedCodec1"]:c3(),["SharedCodec487"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantReadinessAxis(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
