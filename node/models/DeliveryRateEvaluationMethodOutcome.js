import { d684 as c0, d685 as c1 } from '../descriptors/data/38.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d692 as c2 } from '../descriptors/data/39.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1975 as c4, d1976 as c5, d1977 as c6, d1978 as c7, d1979 as c8, d1981 as c9 } from '../descriptors/data/98.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8862 as c10, d8864 as c11, d8865 as c12, d8868 as c13 } from '../descriptors/data/397.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d684 as d684 } from '../descriptors/data/38.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d684;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1065"]:c4(),["SharedCodec1066"]:c5(),["SharedCodec1067"]:c6(),["SharedCodec1068"]:c7(),["SharedCodec1069"]:c8(),["SharedCodec1070"]:c9(),["SharedCodec203"]:c10(),["SharedCodec205"]:c11(),["SharedCodec206"]:c12(),["SharedCodec209"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
