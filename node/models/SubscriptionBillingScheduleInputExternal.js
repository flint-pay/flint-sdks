import { d4063 as c0 } from '../descriptors/data/167.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4063 as d4063 } from '../descriptors/data/167.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4063;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionBillingScheduleInputExternal"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleInputExternal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
