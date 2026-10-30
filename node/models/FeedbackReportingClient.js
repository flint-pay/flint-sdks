import { d5208 as c0 } from '../descriptors/data/232.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5208 as d5208 } from '../descriptors/data/232.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReportingClient"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportingClient(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
