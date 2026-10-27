import { d5143 as c0, d5144 as c1 } from '../descriptors/data/236.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5165 as c2 } from '../descriptors/data/237.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5165 as d5165 } from '../descriptors/data/237.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5165;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1131"]:c0(),["SharedCodec1132"]:c1(),["SubscriptionBillingScheduleUpdateRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
