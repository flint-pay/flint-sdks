import { d8158 as c0, d8156 as c9, d8157 as c22 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d420 as c1 } from '../descriptors/data/25.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10973 as c2 } from '../descriptors/data/522.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8884 as c3 } from '../descriptors/data/398.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c4 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8261 as c5, d8262 as c6, d8263 as c7, d8269 as c10, d8270 as c11 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9744 as c8, d9746 as c34 } from '../descriptors/data/450.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10992 as c12, d10993 as c13, d10994 as c16, d10995 as c17, d10996 as c18, d10997 as c19 } from '../descriptors/data/523.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9652 as c14, d9653 as c15, d9654 as c33 } from '../descriptors/data/444.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10998 as c20, d10999 as c21, d11000 as c25, d11001 as c26, d11002 as c27, d11003 as c28, d11004 as c29, d11005 as c30, d11006 as c31, d11007 as c32, d11008 as c35, d11009 as c37, d11010 as c38, d11011 as c39, d11012 as c40 } from '../descriptors/data/524.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8280 as c23, d8281 as c24, d8282 as c36 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d420 as d420 } from '../descriptors/data/25.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec170"]:c8(),["SharedCodec2"]:c9(),["SharedCodec233"]:c10(),["SharedCodec234"]:c11(),["SharedCodec2884"]:c12(),["SharedCodec2885"]:c13(),["SharedCodec2901"]:c14(),["SharedCodec2902"]:c15(),["SharedCodec2985"]:c16(),["SharedCodec2986"]:c17(),["SharedCodec2988"]:c18(),["SharedCodec2989"]:c19(),["SharedCodec2990"]:c20(),["SharedCodec2991"]:c21(),["SharedCodec3"]:c22(),["SharedCodec316"]:c23(),["SharedCodec317"]:c24(),["SharedCodec597"]:c25(),["SharedCodec598"]:c26(),["SharedCodec599"]:c27(),["SharedCodec600"]:c28(),["SharedCodec601"]:c29(),["SharedCodec602"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
