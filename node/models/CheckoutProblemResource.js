import { d207 as c0, d774 as c1, d1784 as c2, d1783 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d207 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d207;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutProblemResource"]:c0(),["ErrorRemediation"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutProblemResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
