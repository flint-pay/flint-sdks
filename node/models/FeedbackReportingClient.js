import { d3831 as c0 } from '../descriptors/data/160.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3831 as d3831 } from '../descriptors/data/160.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3831;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReportingClient"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportingClient(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
