import { d2483 as c0 } from '../descriptors/data/99.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2483 as d2483 } from '../descriptors/data/99.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateSubscriptionBillingScheduleRequestFlint"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionBillingScheduleRequestFlint(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
