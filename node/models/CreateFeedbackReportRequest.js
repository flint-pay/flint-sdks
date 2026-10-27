import { d148 as c0 } from '../descriptors/data/6.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3831 as c1, d3832 as c2, d3833 as c3 } from '../descriptors/data/160.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d148 as d148 } from '../descriptors/data/6.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d148;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRequest"]:c0(),["FeedbackReportingClient"]:c1(),["SharedCodec112"]:c2(),["SharedCodec113"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
