import { d8056 as c0, d8057 as c1, d8063 as c2, d8068 as c19 } from '../descriptors/data/352.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8694 as c3, d8691 as c7, d8692 as c8, d8693 as c9 } from '../descriptors/data/387.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c4, d8048 as c16, d8049 as c17, d8047 as c18 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c5 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8267 as c6 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8833 as c10, d8829 as c11 } from '../descriptors/data/395.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10926 as c12, d10927 as c13, d10928 as c14, d10929 as c15, d10933 as c21, d10934 as c22, d10935 as c23, d10936 as c24, d10925 as c38 } from '../descriptors/data/519.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8391 as c20 } from '../descriptors/data/371.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8722 as c25, d8723 as c27, d8724 as c30, d8725 as c31, d8726 as c32 } from '../descriptors/data/389.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8714 as c26, d8715 as c28, d8716 as c29 } from '../descriptors/data/388.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10941 as c33, d10942 as c34, d10943 as c35, d10944 as c36, d10946 as c37 } from '../descriptors/data/520.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10949 as c39, d10951 as c41 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7976 as c40 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7813 as c42 } from '../descriptors/data/330.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7813 as d7813 } from '../descriptors/data/330.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7813;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1455"]:c7(),["SharedCodec1456"]:c8(),["SharedCodec1457"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2954"]:c12(),["SharedCodec2955"]:c13(),["SharedCodec2956"]:c14(),["SharedCodec2957"]:c15(),["SharedCodec3069"]:c16(),["SharedCodec3070"]:c17(),["SharedCodec3071"]:c18(),["SharedCodec3073"]:c19(),["SharedCodec3075"]:c20(),["SharedCodec3208"]:c21(),["SharedCodec3209"]:c22(),["SharedCodec3210"]:c23(),["SharedCodec3211"]:c24(),["SharedCodec481"]:c25(),["SharedCodec482"]:c26(),["SharedCodec483"]:c27(),["SharedCodec484"]:c28(),["SharedCodec485"]:c29(),["SharedCodec497"]:c30(),["SharedCodec498"]:c31(),["SharedCodec499"]:c32(),["SharedCodec582"]:c33(),["SharedCodec583"]:c34(),["SharedCodec584"]:c35(),["SharedCodec585"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
