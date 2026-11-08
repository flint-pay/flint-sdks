import { d473 as c0 } from '../descriptors/data/26.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5103 as c1, d5116 as c2 } from '../descriptors/data/226.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5121 as c3, d5122 as c4, d5123 as c5, d5124 as c6, d5125 as c7 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d473 as d473 } from '../descriptors/data/26.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d473;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec465"]:c2(),["SharedCodec474"]:c3(),["SharedCodec475"]:c4(),["SharedCodec476"]:c5(),["SharedCodec477"]:c6(),["SharedCodec478"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
