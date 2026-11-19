import { d229 as c0 } from '../descriptors/data/10.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9960 as c1, d9962 as c2, d9963 as c3, d9964 as c4, d9965 as c5, d9966 as c6, d9967 as c11, d9968 as c13 } from '../descriptors/data/458.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10094 as c7, d10095 as c8, d10096 as c9, d10097 as c10, d10100 as c12 } from '../descriptors/data/466.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d229 as d229 } from '../descriptors/data/10.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2249"]:c3(),["SharedCodec2250"]:c4(),["SharedCodec2251"]:c5(),["SharedCodec2252"]:c6(),["SharedCodec328"]:c7(),["SharedCodec329"]:c8(),["SharedCodec330"]:c9(),["SharedCodec331"]:c10(),["SharedCodec332"]:c11(),["SharedCodec333"]:c12(),["SharedCodec334"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
