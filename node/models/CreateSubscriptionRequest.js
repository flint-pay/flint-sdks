import { d8148 as c0, d8146 as c8, d8147 as c21 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10957 as c1 } from '../descriptors/data/523.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8872 as c2 } from '../descriptors/data/398.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c3 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8251 as c4, d8252 as c5, d8253 as c6, d8259 as c9, d8260 as c10, d8270 as c22, d8271 as c23, d8272 as c35 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9732 as c7, d9734 as c33 } from '../descriptors/data/450.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10976 as c11, d10977 as c12, d10978 as c15, d10979 as c16, d10980 as c17, d10981 as c18, d10982 as c19, d10983 as c20, d10984 as c24, d10985 as c25, d10986 as c26, d10987 as c27, d10988 as c28, d10989 as c29 } from '../descriptors/data/524.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9639 as c13, d9640 as c14, d9641 as c32 } from '../descriptors/data/444.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10990 as c30, d10991 as c31, d10992 as c34, d10993 as c36, d10994 as c37, d10995 as c38, d10996 as c39 } from '../descriptors/data/525.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10957 as d10957 } from '../descriptors/data/523.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10957;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec169"]:c7(),["SharedCodec2"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec2876"]:c11(),["SharedCodec2877"]:c12(),["SharedCodec2893"]:c13(),["SharedCodec2894"]:c14(),["SharedCodec2977"]:c15(),["SharedCodec2978"]:c16(),["SharedCodec2980"]:c17(),["SharedCodec2981"]:c18(),["SharedCodec2982"]:c19(),["SharedCodec2983"]:c20(),["SharedCodec3"]:c21(),["SharedCodec314"]:c22(),["SharedCodec315"]:c23(),["SharedCodec593"]:c24(),["SharedCodec594"]:c25(),["SharedCodec595"]:c26(),["SharedCodec596"]:c27(),["SharedCodec597"]:c28(),["SharedCodec598"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
