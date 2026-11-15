import { d6796 as c0 } from '../descriptors/data/317.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6796 as d6796 } from '../descriptors/data/317.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6796;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReportingClientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportingClientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
