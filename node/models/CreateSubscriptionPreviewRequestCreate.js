import { d8148 as c0, d8146 as c9, d8147 as c22 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d420 as c1 } from '../descriptors/data/26.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10957 as c2 } from '../descriptors/data/523.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8872 as c3 } from '../descriptors/data/398.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c4 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8251 as c5, d8252 as c6, d8253 as c7, d8259 as c10, d8260 as c11, d8270 as c23, d8271 as c24, d8272 as c36 } from '../descriptors/data/365.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9732 as c8, d9734 as c34 } from '../descriptors/data/450.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10976 as c12, d10977 as c13, d10978 as c16, d10979 as c17, d10980 as c18, d10981 as c19, d10982 as c20, d10983 as c21, d10984 as c25, d10985 as c26, d10986 as c27, d10987 as c28, d10988 as c29, d10989 as c30 } from '../descriptors/data/524.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9639 as c14, d9640 as c15, d9641 as c33 } from '../descriptors/data/444.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10990 as c31, d10991 as c32, d10992 as c35, d10993 as c37, d10994 as c38, d10995 as c39, d10996 as c40 } from '../descriptors/data/525.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d420 as d420 } from '../descriptors/data/26.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec169"]:c8(),["SharedCodec2"]:c9(),["SharedCodec232"]:c10(),["SharedCodec233"]:c11(),["SharedCodec2876"]:c12(),["SharedCodec2877"]:c13(),["SharedCodec2893"]:c14(),["SharedCodec2894"]:c15(),["SharedCodec2977"]:c16(),["SharedCodec2978"]:c17(),["SharedCodec2980"]:c18(),["SharedCodec2981"]:c19(),["SharedCodec2982"]:c20(),["SharedCodec2983"]:c21(),["SharedCodec3"]:c22(),["SharedCodec314"]:c23(),["SharedCodec315"]:c24(),["SharedCodec593"]:c25(),["SharedCodec594"]:c26(),["SharedCodec595"]:c27(),["SharedCodec596"]:c28(),["SharedCodec597"]:c29(),["SharedCodec598"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
