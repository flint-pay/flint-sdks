import { d330 as c0 } from '../descriptors/data/19.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4677 as c1, d4678 as c2 } from '../descriptors/data/201.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4115 as c3 } from '../descriptors/data/169.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d330 as d330 } from '../descriptors/data/19.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPreviewRequestPlanChange"]:c0(),["SharedCodec101"]:c1(),["SharedCodec102"]:c2(),["SubscriptionPlanChangeLineItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
