import { d5100 as c0 } from '../descriptors/data/225.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5103 as c1, d5112 as c2, d5113 as c3, d5114 as c4, d5115 as c5, d5116 as c6, d5117 as c7, d5118 as c8, d5119 as c9 } from '../descriptors/data/226.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5120 as c10, d5121 as c11, d5122 as c12, d5123 as c13, d5124 as c14, d5125 as c15 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5100 as d5100 } from '../descriptors/data/225.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec461"]:c2(),["SharedCodec462"]:c3(),["SharedCodec463"]:c4(),["SharedCodec464"]:c5(),["SharedCodec465"]:c6(),["SharedCodec466"]:c7(),["SharedCodec467"]:c8(),["SharedCodec468"]:c9(),["SharedCodec469"]:c10(),["SharedCodec474"]:c11(),["SharedCodec475"]:c12(),["SharedCodec476"]:c13(),["SharedCodec477"]:c14(),["SharedCodec478"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
