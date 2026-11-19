import { d418 as c0 } from '../descriptors/data/25.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8056 as c1, d8057 as c2, d8063 as c3 } from '../descriptors/data/352.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8694 as c4, d8691 as c8, d8692 as c9, d8693 as c10 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c5 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c6 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8267 as c7 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8833 as c11, d8829 as c12 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10926 as c13, d10927 as c14, d10928 as c15, d10929 as c16, d10930 as c17, d10931 as c18, d10932 as c19, d10925 as c33 } from '../descriptors/data/519.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8722 as c20, d8723 as c22, d8724 as c25, d8725 as c26, d8726 as c27 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8714 as c21, d8715 as c23, d8716 as c24 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10941 as c28, d10942 as c29, d10943 as c30, d10944 as c31, d10946 as c32 } from '../descriptors/data/520.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10949 as c34, d10950 as c35 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c36 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d418 as d418 } from '../descriptors/data/25.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1455"]:c8(),["SharedCodec1456"]:c9(),["SharedCodec1457"]:c10(),["SharedCodec189"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2954"]:c13(),["SharedCodec2955"]:c14(),["SharedCodec2956"]:c15(),["SharedCodec2957"]:c16(),["SharedCodec2959"]:c17(),["SharedCodec2960"]:c18(),["SharedCodec2961"]:c19(),["SharedCodec481"]:c20(),["SharedCodec482"]:c21(),["SharedCodec483"]:c22(),["SharedCodec484"]:c23(),["SharedCodec485"]:c24(),["SharedCodec497"]:c25(),["SharedCodec498"]:c26(),["SharedCodec499"]:c27(),["SharedCodec582"]:c28(),["SharedCodec583"]:c29(),["SharedCodec584"]:c30(),["SharedCodec585"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
