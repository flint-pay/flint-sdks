import { d8046 as c0 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c1 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8267 as c2 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8833 as c3, d8829 as c4 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10926 as c5, d10927 as c6, d10928 as c7, d10929 as c8, d10930 as c9, d10931 as c10, d10932 as c11 } from '../descriptors/data/519.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8722 as c12, d8723 as c14, d8724 as c17, d8725 as c18, d8726 as c19 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8714 as c13, d8715 as c15, d8716 as c16 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10950 as c20 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c21 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10950 as d10950 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10950;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec189"]:c3(),["SharedCodec190"]:c4(),["SharedCodec2954"]:c5(),["SharedCodec2955"]:c6(),["SharedCodec2956"]:c7(),["SharedCodec2957"]:c8(),["SharedCodec2959"]:c9(),["SharedCodec2960"]:c10(),["SharedCodec2961"]:c11(),["SharedCodec481"]:c12(),["SharedCodec482"]:c13(),["SharedCodec483"]:c14(),["SharedCodec484"]:c15(),["SharedCodec485"]:c16(),["SharedCodec497"]:c17(),["SharedCodec498"]:c18(),["SharedCodec499"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
