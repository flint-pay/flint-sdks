import { d3345 as c0, d3346 as c3, d3347 as c4 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3477 as c1, d3478 as c11, d3479 as c12 } from '../descriptors/data/143.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c2, d3252 as c9, d3253 as c10 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5472 as c5, d5473 as c6 } from '../descriptors/data/258.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4674 as c7, d4675 as c8, d4677 as c14, d4678 as c15 } from '../descriptors/data/211.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5491 as c13 } from '../descriptors/data/260.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2650 as c16 } from '../descriptors/data/112.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2650 as d2650 } from '../descriptors/data/112.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2650;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["MetadataPatchRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1213"]:c5(),["SharedCodec1214"]:c6(),["SharedCodec1217"]:c7(),["SharedCodec1218"]:c8(),["SharedCodec1252"]:c9(),["SharedCodec1253"]:c10(),["SharedCodec61"]:c11(),["SharedCodec62"]:c12(),["SubscriptionBillingScheduleUpdateRequest"]:c13(),["SubscriptionDeliveryDestinationRequest"]:c14(),["SubscriptionDeliveryRequest"]:c15(),["UpdateSubscriptionRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
