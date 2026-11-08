import { d5793 as c0, d5791 as c8, d5792 as c9 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d360 as c1 } from '../descriptors/data/21.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8283 as c2 } from '../descriptors/data/398.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5939 as c3, d5940 as c10, d5941 as c11 } from '../descriptors/data/262.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c4 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5835 as c5, d5836 as c6, d5837 as c7 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8302 as c12, d8303 as c13, d8304 as c16, d8305 as c17, d8306 as c18, d8307 as c19, d8308 as c20, d8309 as c21, d8310 as c22, d8311 as c23, d8312 as c24, d8313 as c25, d8314 as c27, d8315 as c28, d8316 as c31, d8318 as c32, d8319 as c33, d8320 as c34 } from '../descriptors/data/400.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7197 as c14, d7198 as c15, d7199 as c26, d7201 as c29, d7202 as c30 } from '../descriptors/data/335.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d360 as d360 } from '../descriptors/data/21.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec126"]:c10(),["SharedCodec127"]:c11(),["SharedCodec1440"]:c12(),["SharedCodec1441"]:c13(),["SharedCodec1455"]:c14(),["SharedCodec1456"]:c15(),["SharedCodec1513"]:c16(),["SharedCodec1514"]:c17(),["SharedCodec1515"]:c18(),["SharedCodec1516"]:c19(),["SharedCodec389"]:c20(),["SharedCodec390"]:c21(),["SharedCodec391"]:c22(),["SharedCodec392"]:c23(),["SharedCodec393"]:c24(),["SharedCodec394"]:c25(),["SharedCodec89"]:c26(),["SubscriptionBillingScheduleRequest"]:c27(),["SubscriptionBillingStartRequest"]:c28(),["SubscriptionDeliveryDestinationRequest"]:c29(),["SubscriptionDeliveryRequest"]:c30(),["SubscriptionOfferLineItemRequest"]:c31(),["SubscriptionPromotionRequest"]:c32(),["SubscriptionServiceLocationRequest"]:c33(),["SubscriptionTermsRequest"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
