import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10528 as c1 } from '../descriptors/data/492.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10530 as c2, d10532 as c3, d10534 as c4, d10536 as c5, d10539 as c6, d10540 as c7, d10541 as c8, d10542 as c9, d10543 as c10, d10544 as c11, d10545 as c12, d10546 as c13, d10547 as c14, d10548 as c15, d10549 as c16 } from '../descriptors/data/493.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10550 as c17, d10551 as c18, d10552 as c19, d10553 as c20 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10528 as d10528 } from '../descriptors/data/492.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10528;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2733"]:c6(),["SharedCodec2734"]:c7(),["SharedCodec2735"]:c8(),["SharedCodec2736"]:c9(),["SharedCodec2737"]:c10(),["SharedCodec2738"]:c11(),["SharedCodec2739"]:c12(),["SharedCodec2740"]:c13(),["SharedCodec2741"]:c14(),["SharedCodec2742"]:c15(),["SharedCodec2743"]:c16(),["SharedCodec2744"]:c17(),["SharedCodec2745"]:c18(),["SharedCodec2746"]:c19(),["SharedCodec2747"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
