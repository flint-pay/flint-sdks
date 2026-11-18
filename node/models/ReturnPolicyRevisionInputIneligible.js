import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1826 as c1 } from '../descriptors/data/91.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10530 as c2, d10532 as c3, d10534 as c4, d10536 as c5, d10539 as c6, d10540 as c7, d10541 as c8, d10542 as c9 } from '../descriptors/data/493.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10550 as c10, d10551 as c11, d10552 as c12, d10553 as c13 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1826 as d1826 } from '../descriptors/data/91.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2733"]:c6(),["SharedCodec2734"]:c7(),["SharedCodec2735"]:c8(),["SharedCodec2736"]:c9(),["SharedCodec2744"]:c10(),["SharedCodec2745"]:c11(),["SharedCodec2746"]:c12(),["SharedCodec2747"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
