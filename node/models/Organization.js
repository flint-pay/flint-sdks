import { d765 as c0, d1909 as c1, d1781 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1909 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1909;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrganizationSummary"]:c0(),["Organization"]:c1(),["SharedCodec464"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrganization(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
