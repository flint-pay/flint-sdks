import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10579 as c1 } from '../descriptors/data/499.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10581 as c2, d10583 as c3, d10585 as c4, d10587 as c5, d10590 as c6, d10591 as c7, d10592 as c8, d10593 as c9, d10594 as c10, d10595 as c11, d10596 as c12, d10597 as c13, d10598 as c14, d10599 as c15 } from '../descriptors/data/500.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10600 as c16, d10601 as c17, d10602 as c18, d10603 as c19, d10604 as c20 } from '../descriptors/data/501.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10579 as d10579 } from '../descriptors/data/499.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10579;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2733"]:c6(),["SharedCodec2734"]:c7(),["SharedCodec2735"]:c8(),["SharedCodec2736"]:c9(),["SharedCodec2737"]:c10(),["SharedCodec2738"]:c11(),["SharedCodec2739"]:c12(),["SharedCodec2740"]:c13(),["SharedCodec2741"]:c14(),["SharedCodec2742"]:c15(),["SharedCodec2743"]:c16(),["SharedCodec2744"]:c17(),["SharedCodec2745"]:c18(),["SharedCodec2746"]:c19(),["SharedCodec2747"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
