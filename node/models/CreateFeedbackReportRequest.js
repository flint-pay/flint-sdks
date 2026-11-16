import { d248 as c0 } from '../descriptors/data/12.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6824 as c1, d6828 as c2, d6829 as c3 } from '../descriptors/data/318.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d248 as d248 } from '../descriptors/data/12.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRequest"]:c0(),["FeedbackReportingClientRequest"]:c1(),["SharedCodec259"]:c2(),["SharedCodec260"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
