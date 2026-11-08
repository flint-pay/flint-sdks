import { d5100 as c0 } from '../descriptors/data/225.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5103 as c1, d5112 as c5, d5113 as c6, d5114 as c7, d5115 as c8, d5116 as c9, d5117 as c10, d5118 as c11, d5119 as c12 } from '../descriptors/data/226.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4430 as c2 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4542 as c3 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4873 as c4 } from '../descriptors/data/213.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5120 as c13, d5121 as c14, d5122 as c15, d5123 as c16, d5124 as c17, d5125 as c18 } from '../descriptors/data/227.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4184 as c19 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4184 as d4184 } from '../descriptors/data/173.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4184;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1368"]:c2(),["SharedCodec1371"]:c3(),["SharedCodec1378"]:c4(),["SharedCodec461"]:c5(),["SharedCodec462"]:c6(),["SharedCodec463"]:c7(),["SharedCodec464"]:c8(),["SharedCodec465"]:c9(),["SharedCodec466"]:c10(),["SharedCodec467"]:c11(),["SharedCodec468"]:c12(),["SharedCodec469"]:c13(),["SharedCodec474"]:c14(),["SharedCodec475"]:c15(),["SharedCodec476"]:c16(),["SharedCodec477"]:c17(),["SharedCodec478"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
