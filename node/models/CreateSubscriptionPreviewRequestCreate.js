import { d8135 as c0, d8133 as c9, d8134 as c22 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d418 as c1 } from '../descriptors/data/26.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10926 as c2 } from '../descriptors/data/521.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8859 as c3 } from '../descriptors/data/398.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c4 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8238 as c5, d8239 as c6, d8240 as c7, d8246 as c10, d8247 as c11, d8257 as c23, d8258 as c24, d8259 as c36 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9709 as c8, d9711 as c34 } from '../descriptors/data/449.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10945 as c12, d10946 as c13, d10947 as c16, d10948 as c17, d10949 as c18, d10950 as c19 } from '../descriptors/data/522.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9617 as c14, d9618 as c15, d9619 as c33 } from '../descriptors/data/443.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10951 as c20, d10952 as c21, d10953 as c25, d10954 as c26, d10955 as c27, d10956 as c28, d10957 as c29, d10958 as c30, d10959 as c31, d10960 as c32, d10961 as c35, d10962 as c37, d10963 as c38, d10964 as c39, d10965 as c40 } from '../descriptors/data/523.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d418 as d418 } from '../descriptors/data/26.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec169"]:c8(),["SharedCodec2"]:c9(),["SharedCodec232"]:c10(),["SharedCodec233"]:c11(),["SharedCodec2868"]:c12(),["SharedCodec2869"]:c13(),["SharedCodec2885"]:c14(),["SharedCodec2886"]:c15(),["SharedCodec2969"]:c16(),["SharedCodec2970"]:c17(),["SharedCodec2972"]:c18(),["SharedCodec2973"]:c19(),["SharedCodec2974"]:c20(),["SharedCodec2975"]:c21(),["SharedCodec3"]:c22(),["SharedCodec314"]:c23(),["SharedCodec315"]:c24(),["SharedCodec592"]:c25(),["SharedCodec593"]:c26(),["SharedCodec594"]:c27(),["SharedCodec595"]:c28(),["SharedCodec596"]:c29(),["SharedCodec597"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
