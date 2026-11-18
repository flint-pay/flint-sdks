import { d380 as c0 } from '../descriptors/data/23.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10528 as c3 } from '../descriptors/data/492.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10530 as c4, d10532 as c5, d10534 as c6, d10536 as c7, d10539 as c8, d10540 as c9, d10541 as c10, d10542 as c11, d10543 as c12, d10544 as c13, d10545 as c14, d10546 as c15, d10547 as c16, d10548 as c17, d10549 as c18 } from '../descriptors/data/493.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10550 as c19, d10551 as c20, d10552 as c21, d10553 as c22 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d380 as d380 } from '../descriptors/data/23.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2733"]:c8(),["SharedCodec2734"]:c9(),["SharedCodec2735"]:c10(),["SharedCodec2736"]:c11(),["SharedCodec2737"]:c12(),["SharedCodec2738"]:c13(),["SharedCodec2739"]:c14(),["SharedCodec2740"]:c15(),["SharedCodec2741"]:c16(),["SharedCodec2742"]:c17(),["SharedCodec2743"]:c18(),["SharedCodec2744"]:c19(),["SharedCodec2745"]:c20(),["SharedCodec2746"]:c21(),["SharedCodec2747"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
