import { d8146 as c0, d8144 as c9, d8145 as c22 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d420 as c1 } from '../descriptors/data/26.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10952 as c2 } from '../descriptors/data/521.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8870 as c3 } from '../descriptors/data/397.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c4 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8249 as c5, d8250 as c6, d8251 as c7, d8257 as c10, d8258 as c11, d8268 as c23, d8269 as c24, d8270 as c36 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9729 as c8, d9731 as c34 } from '../descriptors/data/449.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10971 as c12, d10972 as c13, d10973 as c16, d10974 as c17, d10975 as c18, d10976 as c19 } from '../descriptors/data/522.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9637 as c14, d9638 as c15, d9639 as c33 } from '../descriptors/data/443.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10977 as c20, d10978 as c21, d10979 as c25, d10980 as c26, d10981 as c27, d10982 as c28, d10983 as c29, d10984 as c30, d10985 as c31, d10986 as c32, d10987 as c35, d10988 as c37, d10989 as c38, d10990 as c39, d10991 as c40 } from '../descriptors/data/523.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d420 as d420 } from '../descriptors/data/26.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec169"]:c8(),["SharedCodec2"]:c9(),["SharedCodec232"]:c10(),["SharedCodec233"]:c11(),["SharedCodec2874"]:c12(),["SharedCodec2875"]:c13(),["SharedCodec2891"]:c14(),["SharedCodec2892"]:c15(),["SharedCodec2975"]:c16(),["SharedCodec2976"]:c17(),["SharedCodec2978"]:c18(),["SharedCodec2979"]:c19(),["SharedCodec2980"]:c20(),["SharedCodec2981"]:c21(),["SharedCodec3"]:c22(),["SharedCodec314"]:c23(),["SharedCodec315"]:c24(),["SharedCodec593"]:c25(),["SharedCodec594"]:c26(),["SharedCodec595"]:c27(),["SharedCodec596"]:c28(),["SharedCodec597"]:c29(),["SharedCodec598"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
