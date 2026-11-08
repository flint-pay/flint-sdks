import { d5793 as c0, d5791 as c7, d5792 as c8 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8283 as c1 } from '../descriptors/data/398.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5939 as c2, d5940 as c9, d5941 as c10 } from '../descriptors/data/262.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c3 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5835 as c4, d5836 as c5, d5837 as c6 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8302 as c11, d8303 as c12, d8304 as c15, d8305 as c16, d8306 as c17, d8307 as c18, d8308 as c19, d8309 as c20, d8310 as c21, d8311 as c22, d8312 as c23, d8313 as c24, d8314 as c26, d8315 as c27, d8316 as c30, d8318 as c31, d8319 as c32, d8320 as c33 } from '../descriptors/data/400.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7197 as c13, d7198 as c14, d7199 as c25, d7201 as c28, d7202 as c29 } from '../descriptors/data/335.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8283 as d8283 } from '../descriptors/data/398.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec126"]:c9(),["SharedCodec127"]:c10(),["SharedCodec1440"]:c11(),["SharedCodec1441"]:c12(),["SharedCodec1455"]:c13(),["SharedCodec1456"]:c14(),["SharedCodec1513"]:c15(),["SharedCodec1514"]:c16(),["SharedCodec1515"]:c17(),["SharedCodec1516"]:c18(),["SharedCodec389"]:c19(),["SharedCodec390"]:c20(),["SharedCodec391"]:c21(),["SharedCodec392"]:c22(),["SharedCodec393"]:c23(),["SharedCodec394"]:c24(),["SharedCodec89"]:c25(),["SubscriptionBillingScheduleRequest"]:c26(),["SubscriptionBillingStartRequest"]:c27(),["SubscriptionDeliveryDestinationRequest"]:c28(),["SubscriptionDeliveryRequest"]:c29(),["SubscriptionOfferLineItemRequest"]:c30(),["SubscriptionPromotionRequest"]:c31(),["SubscriptionServiceLocationRequest"]:c32(),["SubscriptionTermsRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
