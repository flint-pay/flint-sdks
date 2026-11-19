import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1691 as c1 } from '../descriptors/data/83.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10579 as c2 } from '../descriptors/data/499.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10581 as c3, d10583 as c4, d10585 as c5, d10587 as c6, d10590 as c7, d10591 as c8, d10592 as c9, d10593 as c10, d10594 as c11, d10595 as c12, d10596 as c13, d10597 as c14, d10598 as c15, d10599 as c16 } from '../descriptors/data/500.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10600 as c17, d10601 as c18, d10602 as c19, d10603 as c20, d10604 as c21 } from '../descriptors/data/501.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1691 as d1691 } from '../descriptors/data/83.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2733"]:c7(),["SharedCodec2734"]:c8(),["SharedCodec2735"]:c9(),["SharedCodec2736"]:c10(),["SharedCodec2737"]:c11(),["SharedCodec2738"]:c12(),["SharedCodec2739"]:c13(),["SharedCodec2740"]:c14(),["SharedCodec2741"]:c15(),["SharedCodec2742"]:c16(),["SharedCodec2743"]:c17(),["SharedCodec2744"]:c18(),["SharedCodec2745"]:c19(),["SharedCodec2746"]:c20(),["SharedCodec2747"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
