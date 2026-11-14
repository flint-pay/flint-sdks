import { d280 as c0 } from '../descriptors/data/15.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7141 as c1, d7143 as c2 } from '../descriptors/data/334.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6189 as c4, d6190 as c5, d6191 as c6, d6192 as c7, d6193 as c8, d6194 as c9, d6195 as c10, d6196 as c11, d6197 as c12, d6198 as c13, d6199 as c14, d6200 as c15, d6201 as c16, d6202 as c17, d6203 as c18 } from '../descriptors/data/281.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d280 as d280 } from '../descriptors/data/15.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec63"]:c4(),["SharedCodec64"]:c5(),["SharedCodec65"]:c6(),["SharedCodec66"]:c7(),["SharedCodec946"]:c8(),["SharedCodec947"]:c9(),["SharedCodec948"]:c10(),["SharedCodec949"]:c11(),["SharedCodec950"]:c12(),["SharedCodec951"]:c13(),["SharedCodec952"]:c14(),["SharedCodec953"]:c15(),["SharedCodec954"]:c16(),["SharedCodec955"]:c17(),["SharedCodec956"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
