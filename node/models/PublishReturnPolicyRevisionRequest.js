import { d8003 as c0 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1700 as c1 } from '../descriptors/data/85.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10687 as c2 } from '../descriptors/data/505.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10689 as c3, d10691 as c4, d10693 as c5, d10695 as c6, d10698 as c7, d10699 as c8, d10700 as c9, d10701 as c10, d10702 as c11, d10703 as c12, d10704 as c13, d10705 as c14, d10706 as c15, d10707 as c16 } from '../descriptors/data/506.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10708 as c17, d10709 as c18, d10710 as c19, d10711 as c20, d10712 as c21 } from '../descriptors/data/507.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1700 as d1700 } from '../descriptors/data/85.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2773"]:c7(),["SharedCodec2774"]:c8(),["SharedCodec2775"]:c9(),["SharedCodec2776"]:c10(),["SharedCodec2777"]:c11(),["SharedCodec2778"]:c12(),["SharedCodec2779"]:c13(),["SharedCodec2780"]:c14(),["SharedCodec2781"]:c15(),["SharedCodec2782"]:c16(),["SharedCodec2783"]:c17(),["SharedCodec2784"]:c18(),["SharedCodec2785"]:c19(),["SharedCodec2786"]:c20(),["SharedCodec2787"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
