import { d146 as c0 } from '../descriptors/data/6.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3831 as c1 } from '../descriptors/data/160.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d146 as d146 } from '../descriptors/data/6.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d146;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportNarrative"]:c0(),["FeedbackReportingClient"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportNarrative(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
