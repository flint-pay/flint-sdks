import { d1279 as c0 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5150 as c1, d5151 as c2, d5152 as c3, d5153 as c4, d5154 as c5, d5155 as c6, d5156 as c7, d5157 as c8, d5158 as c9 } from '../descriptors/data/228.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5159 as c10, d5160 as c11, d5161 as c12, d5162 as c13, d5163 as c14, d5164 as c15, d5165 as c16, d5166 as c17, d5167 as c18 } from '../descriptors/data/229.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1279 as d1279 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1279;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTarget"]:c0(),["SharedCodec1238"]:c1(),["SharedCodec1239"]:c2(),["SharedCodec1240"]:c3(),["SharedCodec1241"]:c4(),["SharedCodec1242"]:c5(),["SharedCodec1243"]:c6(),["SharedCodec1244"]:c7(),["SharedCodec1245"]:c8(),["SharedCodec1246"]:c9(),["SharedCodec1247"]:c10(),["SharedCodec1248"]:c11(),["SharedCodec1249"]:c12(),["SharedCodec1250"]:c13(),["SharedCodec1251"]:c14(),["SharedCodec1252"]:c15(),["SharedCodec1253"]:c16(),["SharedCodec1254"]:c17(),["SharedCodec1255"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
