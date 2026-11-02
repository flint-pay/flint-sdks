import { d865 as c0 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d865 as d865 } from '../descriptors/data/40.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d865;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueInvoiceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueInvoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
