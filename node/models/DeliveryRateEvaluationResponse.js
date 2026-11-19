import { d680 as c0, d681 as c1 } from '../descriptors/data/38.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d687 as c2, d688 as c3 } from '../descriptors/data/39.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c4 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1943 as c5, d1945 as c6 } from '../descriptors/data/96.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1946 as c7, d1947 as c8, d1948 as c9, d1949 as c10 } from '../descriptors/data/97.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8736 as c11, d8738 as c12, d8739 as c13, d8742 as c14 } from '../descriptors/data/387.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d687 as d687 } from '../descriptors/data/39.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec1029"]:c5(),["SharedCodec1030"]:c6(),["SharedCodec1031"]:c7(),["SharedCodec1032"]:c8(),["SharedCodec1033"]:c9(),["SharedCodec1034"]:c10(),["SharedCodec200"]:c11(),["SharedCodec202"]:c12(),["SharedCodec203"]:c13(),["SharedCodec206"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
