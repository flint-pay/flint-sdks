import { d8146 as c0, d8144 as c3, d8145 as c8 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d327 as c1 } from '../descriptors/data/17.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8870 as c2 } from '../descriptors/data/397.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8257 as c4, d8258 as c5 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9637 as c6, d9638 as c7, d9639 as c14 } from '../descriptors/data/443.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9617 as c9, d9618 as c10, d9619 as c11, d9620 as c12, d9621 as c13, d9624 as c17 } from '../descriptors/data/442.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9731 as c15, d9733 as c16 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d327 as d327 } from '../descriptors/data/17.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d327;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2891"]:c6(),["SharedCodec2892"]:c7(),["SharedCodec3"]:c8(),["SharedCodec469"]:c9(),["SharedCodec470"]:c10(),["SharedCodec471"]:c11(),["SharedCodec472"]:c12(),["SharedCodec473"]:c13(),["SubscriptionDeliveryDestinationRequest"]:c14(),["SubscriptionDeliveryRequest"]:c15(),["SubscriptionQuantityChangeLineItemRequest"]:c16(),["SubscriptionSwapPreviewRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
