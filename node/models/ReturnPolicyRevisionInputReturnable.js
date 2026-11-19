import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1826 as c1 } from '../descriptors/data/91.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10581 as c2, d10583 as c3, d10585 as c4, d10587 as c5, d10592 as c6, d10593 as c7, d10594 as c8, d10595 as c9, d10596 as c10, d10597 as c11, d10598 as c12 } from '../descriptors/data/500.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10601 as c13, d10602 as c14, d10603 as c15, d10604 as c16 } from '../descriptors/data/501.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1826 as d1826 } from '../descriptors/data/91.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2735"]:c6(),["SharedCodec2736"]:c7(),["SharedCodec2737"]:c8(),["SharedCodec2738"]:c9(),["SharedCodec2739"]:c10(),["SharedCodec2740"]:c11(),["SharedCodec2741"]:c12(),["SharedCodec2744"]:c13(),["SharedCodec2745"]:c14(),["SharedCodec2746"]:c15(),["SharedCodec2747"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
