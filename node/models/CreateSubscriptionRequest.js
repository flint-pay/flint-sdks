import { d8158 as c0, d8156 as c8, d8157 as c21 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10973 as c1 } from '../descriptors/data/522.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8884 as c2 } from '../descriptors/data/398.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8056 as c3 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8261 as c4, d8262 as c5, d8263 as c6, d8269 as c9, d8270 as c10 } from '../descriptors/data/365.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9744 as c7, d9746 as c33 } from '../descriptors/data/450.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10992 as c11, d10993 as c12, d10994 as c15, d10995 as c16, d10996 as c17, d10997 as c18 } from '../descriptors/data/523.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9652 as c13, d9653 as c14, d9654 as c32 } from '../descriptors/data/444.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10998 as c19, d10999 as c20, d11000 as c24, d11001 as c25, d11002 as c26, d11003 as c27, d11004 as c28, d11005 as c29, d11006 as c30, d11007 as c31, d11008 as c34, d11009 as c36, d11010 as c37, d11011 as c38, d11012 as c39 } from '../descriptors/data/524.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8280 as c22, d8281 as c23, d8282 as c35 } from '../descriptors/data/366.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10973 as d10973 } from '../descriptors/data/522.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10973;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec170"]:c7(),["SharedCodec2"]:c8(),["SharedCodec233"]:c9(),["SharedCodec234"]:c10(),["SharedCodec2884"]:c11(),["SharedCodec2885"]:c12(),["SharedCodec2901"]:c13(),["SharedCodec2902"]:c14(),["SharedCodec2985"]:c15(),["SharedCodec2986"]:c16(),["SharedCodec2988"]:c17(),["SharedCodec2989"]:c18(),["SharedCodec2990"]:c19(),["SharedCodec2991"]:c20(),["SharedCodec3"]:c21(),["SharedCodec316"]:c22(),["SharedCodec317"]:c23(),["SharedCodec597"]:c24(),["SharedCodec598"]:c25(),["SharedCodec599"]:c26(),["SharedCodec600"]:c27(),["SharedCodec601"]:c28(),["SharedCodec602"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
