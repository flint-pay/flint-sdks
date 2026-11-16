import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1765 as c1 } from '../descriptors/data/88.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10300 as c2, d10302 as c3, d10304 as c4, d10306 as c5 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10309 as c6, d10310 as c7, d10311 as c8, d10312 as c9, d10320 as c10, d10321 as c11, d10322 as c12, d10323 as c13 } from '../descriptors/data/482.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1765 as d1765 } from '../descriptors/data/88.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2721"]:c6(),["SharedCodec2722"]:c7(),["SharedCodec2723"]:c8(),["SharedCodec2724"]:c9(),["SharedCodec2732"]:c10(),["SharedCodec2733"]:c11(),["SharedCodec2734"]:c12(),["SharedCodec2735"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
