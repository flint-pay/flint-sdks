import { d201 as c0 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5130 as c1 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5144 as c2 } from '../descriptors/data/228.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d201 as d201 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRateCallbackRequest"]:c0(),["DeliveryRateCallbackConfiguration"]:c1(),["WebhookSigningMethod"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
