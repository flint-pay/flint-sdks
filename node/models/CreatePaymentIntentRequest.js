import { d355 as c0 } from '../descriptors/data/20.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10073 as c3, d10074 as c4 } from '../descriptors/data/464.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9961 as c5 } from '../descriptors/data/458.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8228 as c6, d8227 as c7 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8995 as c8 } from '../descriptors/data/403.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10114 as c9, d10115 as c10, d10116 as c11, d10117 as c12, d10118 as c13, d10119 as c14, d10120 as c15, d10121 as c16, d10122 as c17, d10123 as c18, d10124 as c19, d10125 as c20, d10126 as c21, d10127 as c22, d10128 as c23, d10129 as c24 } from '../descriptors/data/467.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d355 as d355 } from '../descriptors/data/20.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeMoney"]:c6(),["PlatformFeeRequest"]:c7(),["SharedCodec216"]:c8(),["SharedCodec513"]:c9(),["SharedCodec514"]:c10(),["SharedCodec515"]:c11(),["SharedCodec516"]:c12(),["SharedCodec517"]:c13(),["SharedCodec518"]:c14(),["SharedCodec519"]:c15(),["SharedCodec520"]:c16(),["SharedCodec521"]:c17(),["SharedCodec522"]:c18(),["SharedCodec523"]:c19(),["SharedCodec524"]:c20(),["SharedCodec525"]:c21(),["SharedCodec526"]:c22(),["SharedCodec527"]:c23(),["SharedCodec528"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
