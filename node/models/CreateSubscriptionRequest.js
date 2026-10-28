import { d3345 as c0, d3346 as c4, d3347 as c5 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5449 as c1 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3477 as c2, d3478 as c14, d3479 as c15 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c3 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5461 as c6, d5462 as c7, d5463 as c10, d5464 as c11, d5465 as c12, d5466 as c13, d5467 as c16, d5468 as c17, d5469 as c20, d5470 as c21, d5471 as c22 } from '../descriptors/data/258.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4674 as c8, d4675 as c9, d4677 as c18, d4678 as c19 } from '../descriptors/data/211.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5449 as d5449 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5449;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec0"]:c4(),["SharedCodec1"]:c5(),["SharedCodec1215"]:c6(),["SharedCodec1216"]:c7(),["SharedCodec1217"]:c8(),["SharedCodec1218"]:c9(),["SharedCodec1235"]:c10(),["SharedCodec1236"]:c11(),["SharedCodec1237"]:c12(),["SharedCodec265"]:c13(),["SharedCodec61"]:c14(),["SharedCodec62"]:c15(),["SubscriptionBillingScheduleRequest"]:c16(),["SubscriptionBillingStartRequest"]:c17(),["SubscriptionDeliveryDestinationRequest"]:c18(),["SubscriptionDeliveryRequest"]:c19(),["SubscriptionOfferLineItemRequest"]:c20(),["SubscriptionServiceLocationRequest"]:c21(),["SubscriptionTermsRequest"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
