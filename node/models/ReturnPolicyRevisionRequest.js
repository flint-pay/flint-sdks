import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10298 as c1, d10300 as c2, d10302 as c3, d10304 as c4, d10306 as c5 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10309 as c6, d10310 as c7, d10311 as c8, d10312 as c9, d10313 as c10, d10314 as c11, d10315 as c12, d10316 as c13, d10317 as c14, d10318 as c15, d10319 as c16, d10320 as c17, d10321 as c18, d10322 as c19, d10323 as c20 } from '../descriptors/data/482.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10298 as d10298 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2721"]:c6(),["SharedCodec2722"]:c7(),["SharedCodec2723"]:c8(),["SharedCodec2724"]:c9(),["SharedCodec2725"]:c10(),["SharedCodec2726"]:c11(),["SharedCodec2727"]:c12(),["SharedCodec2728"]:c13(),["SharedCodec2729"]:c14(),["SharedCodec2730"]:c15(),["SharedCodec2731"]:c16(),["SharedCodec2732"]:c17(),["SharedCodec2733"]:c18(),["SharedCodec2734"]:c19(),["SharedCodec2735"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
