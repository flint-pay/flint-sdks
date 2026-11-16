import { d279 as c0 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7171 as c1, d7173 as c2 } from '../descriptors/data/337.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6216 as c4, d6217 as c5, d6218 as c6, d6219 as c7, d6220 as c8, d6221 as c9, d6222 as c10, d6223 as c11, d6224 as c12, d6225 as c13, d6226 as c14, d6227 as c15, d6228 as c16, d6229 as c17, d6230 as c18 } from '../descriptors/data/284.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d279 as d279 } from '../descriptors/data/14.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInvoicePaymentTermRequest"]:c0(),["InvoiceLateFeePolicyRequest"]:c1(),["InvoicePaymentTermCalculationRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec61"]:c4(),["SharedCodec62"]:c5(),["SharedCodec63"]:c6(),["SharedCodec64"]:c7(),["SharedCodec946"]:c8(),["SharedCodec947"]:c9(),["SharedCodec948"]:c10(),["SharedCodec949"]:c11(),["SharedCodec950"]:c12(),["SharedCodec951"]:c13(),["SharedCodec952"]:c14(),["SharedCodec953"]:c15(),["SharedCodec954"]:c16(),["SharedCodec955"]:c17(),["SharedCodec956"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
