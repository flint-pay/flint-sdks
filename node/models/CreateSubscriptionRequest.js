import { d8135 as c0, d8133 as c8, d8134 as c21 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10926 as c1 } from '../descriptors/data/521.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8859 as c2 } from '../descriptors/data/398.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8035 as c3 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8238 as c4, d8239 as c5, d8240 as c6, d8246 as c9, d8247 as c10, d8257 as c22, d8258 as c23, d8259 as c35 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9709 as c7, d9711 as c33 } from '../descriptors/data/449.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10945 as c11, d10946 as c12, d10947 as c15, d10948 as c16, d10949 as c17, d10950 as c18 } from '../descriptors/data/522.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9617 as c13, d9618 as c14, d9619 as c32 } from '../descriptors/data/443.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10951 as c19, d10952 as c20, d10953 as c24, d10954 as c25, d10955 as c26, d10956 as c27, d10957 as c28, d10958 as c29, d10959 as c30, d10960 as c31, d10961 as c34, d10962 as c36, d10963 as c37, d10964 as c38, d10965 as c39 } from '../descriptors/data/523.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10926 as d10926 } from '../descriptors/data/521.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10926;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec169"]:c7(),["SharedCodec2"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec2868"]:c11(),["SharedCodec2869"]:c12(),["SharedCodec2885"]:c13(),["SharedCodec2886"]:c14(),["SharedCodec2969"]:c15(),["SharedCodec2970"]:c16(),["SharedCodec2972"]:c17(),["SharedCodec2973"]:c18(),["SharedCodec2974"]:c19(),["SharedCodec2975"]:c20(),["SharedCodec3"]:c21(),["SharedCodec314"]:c22(),["SharedCodec315"]:c23(),["SharedCodec592"]:c24(),["SharedCodec593"]:c25(),["SharedCodec594"]:c26(),["SharedCodec595"]:c27(),["SharedCodec596"]:c28(),["SharedCodec597"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
