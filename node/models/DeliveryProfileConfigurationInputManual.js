import { d471 as c0 } from '../descriptors/data/26.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5103 as c1, d5112 as c2, d5113 as c3 } from '../descriptors/data/226.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5121 as c4, d5122 as c5, d5123 as c6, d5124 as c7, d5125 as c8 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d471 as d471 } from '../descriptors/data/26.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d471;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec461"]:c2(),["SharedCodec462"]:c3(),["SharedCodec474"]:c4(),["SharedCodec475"]:c5(),["SharedCodec476"]:c6(),["SharedCodec477"]:c7(),["SharedCodec478"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
