import { d7173 as c0 } from '../descriptors/data/337.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6220 as c1, d6221 as c2, d6222 as c3, d6223 as c4, d6224 as c5, d6225 as c6, d6226 as c7, d6227 as c8, d6228 as c9, d6229 as c10, d6230 as c11 } from '../descriptors/data/284.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7173 as d7173 } from '../descriptors/data/337.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec946"]:c1(),["SharedCodec947"]:c2(),["SharedCodec948"]:c3(),["SharedCodec949"]:c4(),["SharedCodec950"]:c5(),["SharedCodec951"]:c6(),["SharedCodec952"]:c7(),["SharedCodec953"]:c8(),["SharedCodec954"]:c9(),["SharedCodec955"]:c10(),["SharedCodec956"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
