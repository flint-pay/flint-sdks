import { d210 as c0 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5239 as c1, d5242 as c2, d5243 as c3 } from '../descriptors/data/233.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d210 as d210 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRequest"]:c0(),["FeedbackReportingClient"]:c1(),["SharedCodec193"]:c2(),["SharedCodec194"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
