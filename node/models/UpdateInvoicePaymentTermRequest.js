import { d7143 as c0, d7144 as c2, d7145 as c3 } from '../descriptors/data/336.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6186 as c4, d6187 as c5, d6188 as c6, d6189 as c7, d6190 as c8, d6191 as c9, d6192 as c10, d6193 as c11, d6194 as c12, d6195 as c13, d6196 as c14, d6197 as c15, d6198 as c16, d6199 as c17, d6200 as c18 } from '../descriptors/data/283.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5653 as c19 } from '../descriptors/data/247.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5653 as d5653 } from '../descriptors/data/247.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1712"]:c2(),["SharedCodec1713"]:c3(),["SharedCodec61"]:c4(),["SharedCodec62"]:c5(),["SharedCodec63"]:c6(),["SharedCodec64"]:c7(),["SharedCodec946"]:c8(),["SharedCodec947"]:c9(),["SharedCodec948"]:c10(),["SharedCodec949"]:c11(),["SharedCodec950"]:c12(),["SharedCodec951"]:c13(),["SharedCodec952"]:c14(),["SharedCodec953"]:c15(),["SharedCodec954"]:c16(),["SharedCodec955"]:c17(),["SharedCodec956"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
