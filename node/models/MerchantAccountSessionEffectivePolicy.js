import { d1612 as c0 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1612 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionEffectivePolicy"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionEffectivePolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
