import { d246 as c0 } from '../descriptors/data/11.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7627 as c1 } from '../descriptors/data/350.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d246 as d246 } from '../descriptors/data/11.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportNarrative"]:c0(),["FeedbackReportingClientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportNarrative(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
