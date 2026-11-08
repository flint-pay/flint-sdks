import { d6999 as c0, d7000 as c1 } from '../descriptors/data/333.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d7022 as c2 } from '../descriptors/data/335.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d7022 as d7022 } from '../descriptors/data/335.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7022;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1275"]:c0(),["SharedCodec1276"]:c1(),["SubscriptionBillingScheduleUpdateRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
