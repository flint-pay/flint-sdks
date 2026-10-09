import { d176 as c0, d762 as c1, d1820 as c2, d1821 as c3, d14 as c4, d1819 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d176 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutProblemResource"]:c0(),["ErrorRemediation"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["SharedCodec1"]:c4(),["SharedCodec466"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutProblemResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
