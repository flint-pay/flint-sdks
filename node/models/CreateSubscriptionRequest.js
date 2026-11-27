import { d8237 as c0, d8235 as c10, d8236 as c18 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d428 as c1 } from '../descriptors/data/27.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8964 as c2 } from '../descriptors/data/403.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c3 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c4 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8343 as c5, d8340 as c6, d8341 as c7, d8342 as c8, d8349 as c11, d8350 as c12 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9829 as c9, d9831 as c36 } from '../descriptors/data/455.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8224 as c13 } from '../descriptors/data/363.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11122 as c14, d11123 as c15, d11124 as c19, d11125 as c20, d11126 as c21, d11127 as c22, d11128 as c23, d11129 as c24, d11130 as c27, d11131 as c28, d11132 as c29, d11133 as c30, d11134 as c31, d11135 as c32, d11136 as c33, d11137 as c34, d11138 as c37, d11139 as c39, d11140 as c40, d11141 as c41 } from '../descriptors/data/532.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9735 as c16, d9736 as c17, d9737 as c35 } from '../descriptors/data/449.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8360 as c25, d8361 as c26, d8362 as c38 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11142 as c42 } from '../descriptors/data/533.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d428 as d428 } from '../descriptors/data/27.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["PlatformFeeRuleRequest"]:c5(),["PromotionRefInputPromotionCode"]:c6(),["PromotionRefInputPromotionID"]:c7(),["PromotionRefRequest"]:c8(),["SharedCodec172"]:c9(),["SharedCodec2"]:c10(),["SharedCodec235"]:c11(),["SharedCodec236"]:c12(),["SharedCodec2393"]:c13(),["SharedCodec2931"]:c14(),["SharedCodec2932"]:c15(),["SharedCodec2948"]:c16(),["SharedCodec2949"]:c17(),["SharedCodec3"]:c18(),["SharedCodec3032"]:c19(),["SharedCodec3033"]:c20(),["SharedCodec3035"]:c21(),["SharedCodec3036"]:c22(),["SharedCodec3037"]:c23(),["SharedCodec3038"]:c24(),["SharedCodec319"]:c25(),["SharedCodec320"]:c26(),["SharedCodec627"]:c27(),["SharedCodec628"]:c28(),["SharedCodec629"]:c29(),["SharedCodec630"]:c30(),["SharedCodec631"]:c31(),["SharedCodec632"]:c32(),["SubscriptionBillingScheduleRequest"]:c33(),["SubscriptionBillingStartRequest"]:c34(),["SubscriptionDeliveryDestinationRequest"]:c35(),["SubscriptionDeliveryRequest"]:c36(),["SubscriptionOfferLineItemRequest"]:c37(),["SubscriptionPlanChangeLineItemRequest"]:c38(),["SubscriptionPromotionRequest"]:c39(),["SubscriptionServiceLocationRequest"]:c40(),["SubscriptionTaxRequest"]:c41(),["SubscriptionTermsRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
