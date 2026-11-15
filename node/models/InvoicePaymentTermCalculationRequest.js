import { d7143 as c0 } from '../descriptors/data/336.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6190 as c1, d6191 as c2, d6192 as c3, d6193 as c4, d6194 as c5, d6195 as c6, d6196 as c7, d6197 as c8, d6198 as c9, d6199 as c10, d6200 as c11 } from '../descriptors/data/283.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7143 as d7143 } from '../descriptors/data/336.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7143;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec946"]:c1(),["SharedCodec947"]:c2(),["SharedCodec948"]:c3(),["SharedCodec949"]:c4(),["SharedCodec950"]:c5(),["SharedCodec951"]:c6(),["SharedCodec952"]:c7(),["SharedCodec953"]:c8(),["SharedCodec954"]:c9(),["SharedCodec955"]:c10(),["SharedCodec956"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
