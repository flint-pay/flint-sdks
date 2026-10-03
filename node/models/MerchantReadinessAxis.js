import { d1761 as c0, d1784 as c1, d1783 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1761 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1761;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantReadinessAxis"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantReadinessAxis(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
