import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1825 as c1 } from '../descriptors/data/91.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10586 as c2, d10588 as c3, d10590 as c4, d10592 as c5, d10595 as c6, d10596 as c7, d10597 as c8, d10598 as c9 } from '../descriptors/data/501.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10606 as c10, d10607 as c11, d10608 as c12, d10609 as c13 } from '../descriptors/data/502.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1825 as d1825 } from '../descriptors/data/91.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1825;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2735"]:c6(),["SharedCodec2736"]:c7(),["SharedCodec2737"]:c8(),["SharedCodec2738"]:c9(),["SharedCodec2746"]:c10(),["SharedCodec2747"]:c11(),["SharedCodec2748"]:c12(),["SharedCodec2749"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
