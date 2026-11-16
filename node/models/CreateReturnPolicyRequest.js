import { d373 as c0 } from '../descriptors/data/22.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c1 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c2 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10298 as c3, d10300 as c4, d10302 as c5, d10304 as c6, d10306 as c7 } from '../descriptors/data/481.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10309 as c8, d10310 as c9, d10311 as c10, d10312 as c11, d10313 as c12, d10314 as c13, d10315 as c14, d10316 as c15, d10317 as c16, d10318 as c17, d10319 as c18, d10320 as c19, d10321 as c20, d10322 as c21, d10323 as c22 } from '../descriptors/data/482.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d373 as d373 } from '../descriptors/data/22.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2721"]:c8(),["SharedCodec2722"]:c9(),["SharedCodec2723"]:c10(),["SharedCodec2724"]:c11(),["SharedCodec2725"]:c12(),["SharedCodec2726"]:c13(),["SharedCodec2727"]:c14(),["SharedCodec2728"]:c15(),["SharedCodec2729"]:c16(),["SharedCodec2730"]:c17(),["SharedCodec2731"]:c18(),["SharedCodec2732"]:c19(),["SharedCodec2733"]:c20(),["SharedCodec2734"]:c21(),["SharedCodec2735"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
