import { d248 as c0 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6796 as c1 } from '../descriptors/data/318.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d248 as d248 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRating"]:c0(),["FeedbackReportingClientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRating(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
