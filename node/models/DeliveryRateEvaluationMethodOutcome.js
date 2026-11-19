import { d680 as c0, d681 as c1 } from '../descriptors/data/38.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d688 as c2 } from '../descriptors/data/39.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c3 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1943 as c4, d1945 as c5 } from '../descriptors/data/96.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1946 as c6, d1947 as c7, d1948 as c8, d1949 as c9 } from '../descriptors/data/97.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8736 as c10, d8738 as c11, d8739 as c12, d8742 as c13 } from '../descriptors/data/387.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d680 as d680 } from '../descriptors/data/38.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1029"]:c4(),["SharedCodec1030"]:c5(),["SharedCodec1031"]:c6(),["SharedCodec1032"]:c7(),["SharedCodec1033"]:c8(),["SharedCodec1034"]:c9(),["SharedCodec200"]:c10(),["SharedCodec202"]:c11(),["SharedCodec203"]:c12(),["SharedCodec206"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
