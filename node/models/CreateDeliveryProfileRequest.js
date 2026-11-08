import { d200 as c0 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5100 as c1 } from '../descriptors/data/225.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5103 as c2, d5112 as c4, d5113 as c5, d5114 as c6, d5115 as c7, d5116 as c8, d5117 as c9, d5118 as c10, d5119 as c11 } from '../descriptors/data/226.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c3 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5120 as c12, d5121 as c13, d5122 as c14, d5123 as c15, d5124 as c16, d5125 as c17 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d200 as d200 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec461"]:c4(),["SharedCodec462"]:c5(),["SharedCodec463"]:c6(),["SharedCodec464"]:c7(),["SharedCodec465"]:c8(),["SharedCodec466"]:c9(),["SharedCodec467"]:c10(),["SharedCodec468"]:c11(),["SharedCodec469"]:c12(),["SharedCodec474"]:c13(),["SharedCodec475"]:c14(),["SharedCodec476"]:c15(),["SharedCodec477"]:c16(),["SharedCodec478"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
