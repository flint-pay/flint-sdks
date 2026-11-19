import { d8146 as c0, d8144 as c2, d8145 as c7 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8870 as c1 } from '../descriptors/data/397.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8257 as c3, d8258 as c4 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9637 as c5, d9638 as c6, d9639 as c8 } from '../descriptors/data/443.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9731 as c9 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7767 as c10 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7767 as d7767 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7767;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec2"]:c2(),["SharedCodec232"]:c3(),["SharedCodec233"]:c4(),["SharedCodec2891"]:c5(),["SharedCodec2892"]:c6(),["SharedCodec3"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8(),["SubscriptionDeliveryRequest"]:c9(),["UpdateMeSubscriptionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMeSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
