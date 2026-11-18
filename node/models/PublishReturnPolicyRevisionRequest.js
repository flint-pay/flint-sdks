import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1692 as c1 } from '../descriptors/data/84.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10528 as c2 } from '../descriptors/data/492.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10530 as c3, d10532 as c4, d10534 as c5, d10536 as c6, d10539 as c7, d10540 as c8, d10541 as c9, d10542 as c10, d10543 as c11, d10544 as c12, d10545 as c13, d10546 as c14, d10547 as c15, d10548 as c16, d10549 as c17 } from '../descriptors/data/493.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10550 as c18, d10551 as c19, d10552 as c20, d10553 as c21 } from '../descriptors/data/494.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1692 as d1692 } from '../descriptors/data/84.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1692;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2733"]:c7(),["SharedCodec2734"]:c8(),["SharedCodec2735"]:c9(),["SharedCodec2736"]:c10(),["SharedCodec2737"]:c11(),["SharedCodec2738"]:c12(),["SharedCodec2739"]:c13(),["SharedCodec2740"]:c14(),["SharedCodec2741"]:c15(),["SharedCodec2742"]:c16(),["SharedCodec2743"]:c17(),["SharedCodec2744"]:c18(),["SharedCodec2745"]:c19(),["SharedCodec2746"]:c20(),["SharedCodec2747"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
