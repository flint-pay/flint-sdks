import { d7339 as c0 } from '../descriptors/data/343.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1275 as c1 } from '../descriptors/data/59.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d1275 as d1275 } from '../descriptors/data/59.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1275;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundDestinations"]:c0(),["RetryOrderEditRefundRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRetryOrderEditRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
