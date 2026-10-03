import { d61 as c0, d2275 as c1, d60 as c2 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d61 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d61;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["SelectedProductOption"]:c1(),["SharedCodec16"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
