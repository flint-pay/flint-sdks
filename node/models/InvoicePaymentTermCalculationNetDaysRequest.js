import { d894 as c0 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6224 as c1 } from '../descriptors/data/284.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d894 as d894 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d894;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationNetDaysRequest"]:c0(),["SharedCodec950"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationNetDaysRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
