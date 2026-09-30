import { d190 as c0, d726 as c1, d1646 as c2, d1645 as c3 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d190 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d190;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutProblemResource"]:c0(),["ErrorRemediation"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutProblemResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
