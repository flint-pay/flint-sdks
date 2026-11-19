import { d382 as c0 } from '../descriptors/data/23.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c1 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10579 as c3 } from '../descriptors/data/499.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10581 as c4, d10583 as c5, d10585 as c6, d10587 as c7, d10590 as c8, d10591 as c9, d10592 as c10, d10593 as c11, d10594 as c12, d10595 as c13, d10596 as c14, d10597 as c15, d10598 as c16, d10599 as c17 } from '../descriptors/data/500.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10600 as c18, d10601 as c19, d10602 as c20, d10603 as c21, d10604 as c22 } from '../descriptors/data/501.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d382 as d382 } from '../descriptors/data/23.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2733"]:c8(),["SharedCodec2734"]:c9(),["SharedCodec2735"]:c10(),["SharedCodec2736"]:c11(),["SharedCodec2737"]:c12(),["SharedCodec2738"]:c13(),["SharedCodec2739"]:c14(),["SharedCodec2740"]:c15(),["SharedCodec2741"]:c16(),["SharedCodec2742"]:c17(),["SharedCodec2743"]:c18(),["SharedCodec2744"]:c19(),["SharedCodec2745"]:c20(),["SharedCodec2746"]:c21(),["SharedCodec2747"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
