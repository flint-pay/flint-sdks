import { d474 as c0 } from '../descriptors/data/26.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5103 as c1, d5112 as c2, d5113 as c3, d5116 as c4, d5117 as c5, d5118 as c6 } from '../descriptors/data/226.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5121 as c7, d5122 as c8, d5123 as c9, d5124 as c10, d5125 as c11 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d474 as d474 } from '../descriptors/data/26.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec461"]:c2(),["SharedCodec462"]:c3(),["SharedCodec465"]:c4(),["SharedCodec466"]:c5(),["SharedCodec467"]:c6(),["SharedCodec474"]:c7(),["SharedCodec475"]:c8(),["SharedCodec476"]:c9(),["SharedCodec477"]:c10(),["SharedCodec478"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
