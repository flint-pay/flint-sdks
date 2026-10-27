import { d760 as c0 } from '../descriptors/data/32.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d760 as d760 } from '../descriptors/data/32.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueInvoiceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueInvoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
