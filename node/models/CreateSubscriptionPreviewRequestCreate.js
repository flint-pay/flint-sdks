import { d8237 as c0, d8235 as c8, d8236 as c15 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d421 as c1 } from '../descriptors/data/26.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8964 as c2 } from '../descriptors/data/402.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c3 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8340 as c4, d8341 as c5, d8342 as c6, d8349 as c9, d8350 as c10 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9829 as c7, d9831 as c34 } from '../descriptors/data/454.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11122 as c11, d11123 as c12, d11124 as c16, d11125 as c17, d11126 as c18, d11127 as c19, d11128 as c20, d11129 as c21, d11130 as c24, d11131 as c25, d11132 as c26, d11133 as c27, d11134 as c28, d11135 as c29, d11136 as c30, d11137 as c31, d11138 as c35, d11139 as c37, d11140 as c38, d11141 as c39 } from '../descriptors/data/531.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9735 as c13, d9736 as c14, d9737 as c33 } from '../descriptors/data/448.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8360 as c22, d8361 as c23, d8362 as c36 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11119 as c32 } from '../descriptors/data/530.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11142 as c40 } from '../descriptors/data/532.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d421 as d421 } from '../descriptors/data/26.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d421;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec172"]:c7(),["SharedCodec2"]:c8(),["SharedCodec235"]:c9(),["SharedCodec236"]:c10(),["SharedCodec2931"]:c11(),["SharedCodec2932"]:c12(),["SharedCodec2948"]:c13(),["SharedCodec2949"]:c14(),["SharedCodec3"]:c15(),["SharedCodec3032"]:c16(),["SharedCodec3033"]:c17(),["SharedCodec3035"]:c18(),["SharedCodec3036"]:c19(),["SharedCodec3037"]:c20(),["SharedCodec3038"]:c21(),["SharedCodec319"]:c22(),["SharedCodec320"]:c23(),["SharedCodec627"]:c24(),["SharedCodec628"]:c25(),["SharedCodec629"]:c26(),["SharedCodec630"]:c27(),["SharedCodec631"]:c28(),["SharedCodec632"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionCreatePreviewRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
