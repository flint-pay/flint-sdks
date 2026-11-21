import { d1166 as c0 } from '../descriptors/data/58.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1166 as d1166 } from '../descriptors/data/58.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1166;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IssueInvoiceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIssueInvoiceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
