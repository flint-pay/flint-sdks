import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7834 as c1, d7835 as c2 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7834 as d7834 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["TaxComponentRequestRequest"]:c1(),["TaxJurisdictionRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxComponentRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
