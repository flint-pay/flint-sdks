import { d147 as c0 } from '../descriptors/data/6.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3831 as c1 } from '../descriptors/data/160.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d147 as d147 } from '../descriptors/data/6.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFeedbackReportRating"]:c0(),["FeedbackReportingClient"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFeedbackReportRating(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
