import { d7928 as c0 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1825 as c1 } from '../descriptors/data/91.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10602 as c2, d10604 as c3, d10606 as c4, d10608 as c5, d10611 as c6, d10612 as c7, d10613 as c8, d10614 as c9 } from '../descriptors/data/501.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10622 as c10, d10623 as c11, d10624 as c12, d10625 as c13 } from '../descriptors/data/502.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1825 as d1825 } from '../descriptors/data/91.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1825;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2743"]:c6(),["SharedCodec2744"]:c7(),["SharedCodec2745"]:c8(),["SharedCodec2746"]:c9(),["SharedCodec2754"]:c10(),["SharedCodec2755"]:c11(),["SharedCodec2756"]:c12(),["SharedCodec2757"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
