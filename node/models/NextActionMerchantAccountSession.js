import { d1645 as c0 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1645 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1645;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["NextActionMerchantAccountSession"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeNextActionMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
