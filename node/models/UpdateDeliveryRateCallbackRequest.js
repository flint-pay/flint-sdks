import { d5131 as c0, d5135 as c3 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4873 as c1 } from '../descriptors/data/213.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5143 as c2, d5144 as c5 } from '../descriptors/data/228.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4185 as c4 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4185 as d4185 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackConfigurationPatchRequest"]:c0(),["SharedCodec1378"]:c1(),["SharedCodec1384"]:c2(),["SharedCodec1385"]:c3(),["UpdateDeliveryRateCallbackRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
