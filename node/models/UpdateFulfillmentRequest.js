import { d3345 as c0, d3346 as c3, d3347 as c4, d3348 as c5 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4128 as c1, d4124 as c12, d4125 as c13, d4126 as c15, d4127 as c16 } from '../descriptors/data/180.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c2 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4098 as c6, d4099 as c7, d4100 as c8, d4101 as c9, d4102 as c10 } from '../descriptors/data/178.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3636 as c11 } from '../descriptors/data/153.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2593 as c14 } from '../descriptors/data/108.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2593 as d2593 } from '../descriptors/data/108.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["FulfillmentRecipientRequest"]:c1(),["MetadataPatchRequest"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1256"]:c5(),["SharedCodec1270"]:c6(),["SharedCodec1271"]:c7(),["SharedCodec1272"]:c8(),["SharedCodec1273"]:c9(),["SharedCodec1274"]:c10(),["SharedCodec993"]:c11(),["UpdateDeliveryFulfillmentDetails"]:c12(),["UpdateDigitalFulfillmentDetails"]:c13(),["UpdateFulfillmentRequest"]:c14(),["UpdatePickupFulfillmentDetails"]:c15(),["UpdateServiceFulfillmentDetails"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
