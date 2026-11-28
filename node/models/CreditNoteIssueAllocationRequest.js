import { d8367 as c0 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8367 as d8367 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreditNoteIssueAllocationRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreditNoteIssueAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
