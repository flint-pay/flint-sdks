import { d5160 as c0, d5161 as c1, d5168 as c2 } from '../descriptors/data/237.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5168 as d5168 } from '../descriptors/data/237.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1144"]:c0(),["SharedCodec1145"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
