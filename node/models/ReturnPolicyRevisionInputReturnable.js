import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1827 as c1 } from '../descriptors/data/91.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10530 as c2, d10532 as c3, d10534 as c4, d10536 as c5, d10541 as c6, d10542 as c7, d10543 as c8, d10544 as c9, d10545 as c10, d10546 as c11, d10547 as c12 } from '../descriptors/data/493.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10550 as c13, d10551 as c14, d10552 as c15, d10553 as c16 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1827 as d1827 } from '../descriptors/data/91.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2735"]:c6(),["SharedCodec2736"]:c7(),["SharedCodec2737"]:c8(),["SharedCodec2738"]:c9(),["SharedCodec2739"]:c10(),["SharedCodec2740"]:c11(),["SharedCodec2741"]:c12(),["SharedCodec2744"]:c13(),["SharedCodec2745"]:c14(),["SharedCodec2746"]:c15(),["SharedCodec2747"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
