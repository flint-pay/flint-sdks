import { d8146 as c0, d8144 as c3, d8145 as c12 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8870 as c1 } from '../descriptors/data/397.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9729 as c2, d9731 as c27 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8257 as c4, d8258 as c5, d8268 as c16, d8269 as c17 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10998 as c6, d10999 as c7, d10979 as c22, d10980 as c23, d10981 as c24 } from '../descriptors/data/523.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9637 as c8, d9638 as c9, d9639 as c26 } from '../descriptors/data/443.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10975 as c10, d10976 as c11 } from '../descriptors/data/522.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8048 as c13, d8049 as c14, d8047 as c15 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d11004 as c18, d11005 as c19, d11006 as c20, d11007 as c21 } from '../descriptors/data/524.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d11033 as c25 } from '../descriptors/data/526.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7814 as c28 } from '../descriptors/data/331.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7814 as d7814 } from '../descriptors/data/331.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7814;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec169"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2872"]:c6(),["SharedCodec2873"]:c7(),["SharedCodec2891"]:c8(),["SharedCodec2892"]:c9(),["SharedCodec2978"]:c10(),["SharedCodec2979"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3069"]:c13(),["SharedCodec3070"]:c14(),["SharedCodec3071"]:c15(),["SharedCodec314"]:c16(),["SharedCodec315"]:c17(),["SharedCodec3212"]:c18(),["SharedCodec3213"]:c19(),["SharedCodec3214"]:c20(),["SharedCodec3215"]:c21(),["SharedCodec593"]:c22(),["SharedCodec594"]:c23(),["SharedCodec595"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
