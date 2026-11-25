import { d685 as c0 } from '../descriptors/data/38.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d692 as c1 } from '../descriptors/data/39.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1975 as c3, d1976 as c4, d1977 as c5, d1978 as c6, d1979 as c7, d1981 as c8 } from '../descriptors/data/98.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8862 as c9, d8864 as c10, d8865 as c11, d8868 as c12 } from '../descriptors/data/397.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d685 as d685 } from '../descriptors/data/38.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1065"]:c3(),["SharedCodec1066"]:c4(),["SharedCodec1067"]:c5(),["SharedCodec1068"]:c6(),["SharedCodec1069"]:c7(),["SharedCodec1070"]:c8(),["SharedCodec203"]:c9(),["SharedCodec205"]:c10(),["SharedCodec206"]:c11(),["SharedCodec209"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
