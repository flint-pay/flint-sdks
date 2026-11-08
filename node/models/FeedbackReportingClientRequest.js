import { d6492 as c0 } from '../descriptors/data/293.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6492 as d6492 } from '../descriptors/data/293.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6492;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FeedbackReportingClientRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFeedbackReportingClientRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
