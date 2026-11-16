import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1639 as c1 } from '../descriptors/data/81.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10298 as c2, d10300 as c3, d10302 as c4, d10304 as c5, d10306 as c6 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10309 as c7, d10310 as c8, d10311 as c9, d10312 as c10, d10313 as c11, d10314 as c12, d10315 as c13, d10316 as c14, d10317 as c15, d10318 as c16, d10319 as c17, d10320 as c18, d10321 as c19, d10322 as c20, d10323 as c21 } from '../descriptors/data/482.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1639 as d1639 } from '../descriptors/data/81.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1639;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2721"]:c7(),["SharedCodec2722"]:c8(),["SharedCodec2723"]:c9(),["SharedCodec2724"]:c10(),["SharedCodec2725"]:c11(),["SharedCodec2726"]:c12(),["SharedCodec2727"]:c13(),["SharedCodec2728"]:c14(),["SharedCodec2729"]:c15(),["SharedCodec2730"]:c16(),["SharedCodec2731"]:c17(),["SharedCodec2732"]:c18(),["SharedCodec2733"]:c19(),["SharedCodec2734"]:c20(),["SharedCodec2735"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
