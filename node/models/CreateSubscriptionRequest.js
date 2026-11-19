import { d8146 as c0, d8144 as c8, d8145 as c21 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10952 as c1 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8870 as c2 } from '../descriptors/data/397.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c3 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8249 as c4, d8250 as c5, d8251 as c6, d8257 as c9, d8258 as c10, d8268 as c22, d8269 as c23, d8270 as c35 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9729 as c7, d9731 as c33 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10971 as c11, d10972 as c12, d10973 as c15, d10974 as c16, d10975 as c17, d10976 as c18 } from '../descriptors/data/522.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9637 as c13, d9638 as c14, d9639 as c32 } from '../descriptors/data/443.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10977 as c19, d10978 as c20, d10979 as c24, d10980 as c25, d10981 as c26, d10982 as c27, d10983 as c28, d10984 as c29, d10985 as c30, d10986 as c31, d10987 as c34, d10988 as c36, d10989 as c37, d10990 as c38, d10991 as c39 } from '../descriptors/data/523.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10952 as d10952 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec169"]:c7(),["SharedCodec2"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec2874"]:c11(),["SharedCodec2875"]:c12(),["SharedCodec2891"]:c13(),["SharedCodec2892"]:c14(),["SharedCodec2975"]:c15(),["SharedCodec2976"]:c16(),["SharedCodec2978"]:c17(),["SharedCodec2979"]:c18(),["SharedCodec2980"]:c19(),["SharedCodec2981"]:c20(),["SharedCodec3"]:c21(),["SharedCodec314"]:c22(),["SharedCodec315"]:c23(),["SharedCodec593"]:c24(),["SharedCodec594"]:c25(),["SharedCodec595"]:c26(),["SharedCodec596"]:c27(),["SharedCodec597"]:c28(),["SharedCodec598"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
