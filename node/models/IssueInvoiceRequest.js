import { d930 as c0 } from '../descriptors/data/46.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d930 as d930 } from '../descriptors/data/46.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueInvoiceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueInvoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
