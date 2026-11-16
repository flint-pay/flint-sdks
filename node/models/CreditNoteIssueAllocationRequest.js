import { d6167 as c0 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6167 as d6167 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteIssueAllocationRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteIssueAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
