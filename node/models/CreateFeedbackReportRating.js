import { d247 as c0 } from '../descriptors/data/12.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6824 as c1 } from '../descriptors/data/318.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d247 as d247 } from '../descriptors/data/12.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRating"]:c0(),["FeedbackReportingClientRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRating(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
