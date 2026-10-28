import { d3162 as c0 } from '../descriptors/data/125.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d238 as c1 } from '../descriptors/data/14.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d5148 as c2 } from '../descriptors/data/236.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3293 as c3, d3294 as c14, d3295 as c15 } from '../descriptors/data/131.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4206 as c4, d4207 as c16, d4208 as c17 } from '../descriptors/data/179.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d5160 as c5, d5161 as c6, d5162 as c9, d5163 as c10, d5164 as c11, d5165 as c12, d5166 as c13, d5167 as c18, d5168 as c19, d5169 as c22 } from '../descriptors/data/237.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4432 as c7, d4433 as c8, d4435 as c20, d4436 as c21 } from '../descriptors/data/194.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d5170 as c23, d5171 as c24 } from '../descriptors/data/238.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d238 as d238 } from '../descriptors/data/14.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["OrderDeliveryDestinationAddressRequest"]:c4(),["SharedCodec1144"]:c5(),["SharedCodec1145"]:c6(),["SharedCodec1146"]:c7(),["SharedCodec1147"]:c8(),["SharedCodec1158"]:c9(),["SharedCodec1159"]:c10(),["SharedCodec1160"]:c11(),["SharedCodec1161"]:c12(),["SharedCodec235"]:c13(),["SharedCodec47"]:c14(),["SharedCodec48"]:c15(),["SharedCodec973"]:c16(),["SharedCodec974"]:c17(),["SubscriptionBillingScheduleRequest"]:c18(),["SubscriptionBillingStartRequest"]:c19(),["SubscriptionDeliveryDestinationRequest"]:c20(),["SubscriptionDeliveryRequest"]:c21(),["SubscriptionOfferLineItemRequest"]:c22(),["SubscriptionServiceLocationRequest"]:c23(),["SubscriptionTermsRequest"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
