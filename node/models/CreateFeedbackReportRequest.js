import { d147 as c0 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3816 as c1, d3817 as c2, d3818 as c3 } from '../descriptors/data/159.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d147 as d147 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRequest"]:c0(),["FeedbackReportingClient"]:c1(),["SharedCodec107"]:c2(),["SharedCodec108"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
