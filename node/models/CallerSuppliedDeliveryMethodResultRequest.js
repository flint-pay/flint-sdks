import { d8852 as c0, d8853 as c1 } from '../descriptors/data/396.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8857 as c2, d8858 as c4, d8859 as c5, d8860 as c6, d8861 as c7, d8862 as c8, d8863 as c9, d8864 as c10, d8865 as c11, d8866 as c12, d8867 as c13, d8868 as c14 } from '../descriptors/data/397.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8852 as d8852 } from '../descriptors/data/396.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8852;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec199"]:c4(),["SharedCodec200"]:c5(),["SharedCodec201"]:c6(),["SharedCodec202"]:c7(),["SharedCodec203"]:c8(),["SharedCodec204"]:c9(),["SharedCodec205"]:c10(),["SharedCodec206"]:c11(),["SharedCodec207"]:c12(),["SharedCodec208"]:c13(),["SharedCodec209"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
