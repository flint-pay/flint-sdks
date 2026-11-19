import { d8726 as c0, d8727 as c1, d8731 as c2, d8732 as c4, d8733 as c5, d8734 as c6, d8735 as c7 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8736 as c8, d8737 as c9, d8738 as c10, d8739 as c11, d8740 as c12, d8741 as c13, d8742 as c14 } from '../descriptors/data/387.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8726 as d8726 } from '../descriptors/data/386.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec196"]:c4(),["SharedCodec197"]:c5(),["SharedCodec198"]:c6(),["SharedCodec199"]:c7(),["SharedCodec200"]:c8(),["SharedCodec201"]:c9(),["SharedCodec202"]:c10(),["SharedCodec203"]:c11(),["SharedCodec204"]:c12(),["SharedCodec205"]:c13(),["SharedCodec206"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
