import { d681 as c0 } from '../descriptors/data/38.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d688 as c1 } from '../descriptors/data/39.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1943 as c3, d1945 as c4 } from '../descriptors/data/96.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1946 as c5, d1947 as c6, d1948 as c7, d1949 as c8 } from '../descriptors/data/97.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8736 as c9, d8738 as c10, d8739 as c11, d8742 as c12 } from '../descriptors/data/387.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d681 as d681 } from '../descriptors/data/38.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1029"]:c3(),["SharedCodec1030"]:c4(),["SharedCodec1031"]:c5(),["SharedCodec1032"]:c6(),["SharedCodec1033"]:c7(),["SharedCodec1034"]:c8(),["SharedCodec200"]:c9(),["SharedCodec202"]:c10(),["SharedCodec203"]:c11(),["SharedCodec206"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
