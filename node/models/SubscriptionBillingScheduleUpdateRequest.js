import { d5172 as c0, d5173 as c1 } from '../descriptors/data/238.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5194 as c2 } from '../descriptors/data/239.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5194 as d5194 } from '../descriptors/data/239.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1142"]:c0(),["SharedCodec1143"]:c1(),["SubscriptionBillingScheduleUpdateRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
