import { d8237 as c0, d8235 as c7, d8236 as c14 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8964 as c1 } from '../descriptors/data/403.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c2 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8340 as c3, d8341 as c4, d8342 as c5, d8349 as c8, d8350 as c9 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9829 as c6, d9831 as c33 } from '../descriptors/data/455.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11122 as c10, d11123 as c11, d11124 as c15, d11125 as c16, d11126 as c17, d11127 as c18, d11128 as c19, d11129 as c20, d11130 as c23, d11131 as c24, d11132 as c25, d11133 as c26, d11134 as c27, d11135 as c28, d11136 as c29, d11137 as c30, d11138 as c34, d11139 as c36, d11140 as c37, d11141 as c38 } from '../descriptors/data/532.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9735 as c12, d9736 as c13, d9737 as c32 } from '../descriptors/data/449.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8360 as c21, d8361 as c22, d8362 as c35 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11119 as c31 } from '../descriptors/data/531.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11142 as c39 } from '../descriptors/data/533.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11119 as d11119 } from '../descriptors/data/531.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["MetadataRequest"]:c2(),["PromotionRefInputPromotionCode"]:c3(),["PromotionRefInputPromotionID"]:c4(),["PromotionRefRequest"]:c5(),["SharedCodec172"]:c6(),["SharedCodec2"]:c7(),["SharedCodec235"]:c8(),["SharedCodec236"]:c9(),["SharedCodec2931"]:c10(),["SharedCodec2932"]:c11(),["SharedCodec2948"]:c12(),["SharedCodec2949"]:c13(),["SharedCodec3"]:c14(),["SharedCodec3032"]:c15(),["SharedCodec3033"]:c16(),["SharedCodec3035"]:c17(),["SharedCodec3036"]:c18(),["SharedCodec3037"]:c19(),["SharedCodec3038"]:c20(),["SharedCodec319"]:c21(),["SharedCodec320"]:c22(),["SharedCodec627"]:c23(),["SharedCodec628"]:c24(),["SharedCodec629"]:c25(),["SharedCodec630"]:c26(),["SharedCodec631"]:c27(),["SharedCodec632"]:c28(),["SubscriptionBillingScheduleRequest"]:c29(),["SubscriptionBillingStartRequest"]:c30(),["SubscriptionCreatePreviewRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionCreatePreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
