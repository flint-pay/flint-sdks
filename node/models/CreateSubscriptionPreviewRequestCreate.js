import { d3345 as c0, d3346 as c5, d3347 as c6 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d278 as c1 } from '../descriptors/data/17.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5449 as c2 } from '../descriptors/data/257.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3477 as c3, d3478 as c15, d3479 as c16 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c4 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5461 as c7, d5462 as c8, d5463 as c11, d5464 as c12, d5465 as c13, d5466 as c14, d5467 as c17, d5468 as c18, d5469 as c21, d5470 as c22, d5471 as c23 } from '../descriptors/data/258.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4674 as c9, d4675 as c10, d4677 as c19, d4678 as c20 } from '../descriptors/data/211.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d278 as d278 } from '../descriptors/data/17.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6(),["SharedCodec1215"]:c7(),["SharedCodec1216"]:c8(),["SharedCodec1217"]:c9(),["SharedCodec1218"]:c10(),["SharedCodec1235"]:c11(),["SharedCodec1236"]:c12(),["SharedCodec1237"]:c13(),["SharedCodec265"]:c14(),["SharedCodec61"]:c15(),["SharedCodec62"]:c16(),["SubscriptionBillingScheduleRequest"]:c17(),["SubscriptionBillingStartRequest"]:c18(),["SubscriptionDeliveryDestinationRequest"]:c19(),["SubscriptionDeliveryRequest"]:c20(),["SubscriptionOfferLineItemRequest"]:c21(),["SubscriptionServiceLocationRequest"]:c22(),["SubscriptionTermsRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
