import { d892 as c0 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6226 as c1 } from '../descriptors/data/284.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d892 as d892 } from '../descriptors/data/44.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d892;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationDaysAfterMonthEndRequest"]:c0(),["SharedCodec952"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
