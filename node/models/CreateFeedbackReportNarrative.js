import { d247 as c0 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6796 as c1 } from '../descriptors/data/318.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d247 as d247 } from '../descriptors/data/12.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportNarrative"]:c0(),["FeedbackReportingClientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportNarrative(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
