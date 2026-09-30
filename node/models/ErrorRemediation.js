import { d726 as c0, d1646 as c1, d1645 as c2 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d726 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeErrorRemediation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
