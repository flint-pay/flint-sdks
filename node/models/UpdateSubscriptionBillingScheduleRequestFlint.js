import { d2496 as c0 } from '../descriptors/data/101.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2496 as d2496 } from '../descriptors/data/101.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2496;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateSubscriptionBillingScheduleRequestFlint"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionBillingScheduleRequestFlint(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
