import { d1278 as c0, d1279 as c1 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5148 as c2, d5149 as c3, d5150 as c4, d5151 as c5, d5152 as c6, d5153 as c7, d5154 as c8, d5155 as c9, d5156 as c10, d5157 as c11, d5158 as c12 } from '../descriptors/data/228.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5159 as c13, d5160 as c14, d5161 as c15, d5162 as c16, d5163 as c17, d5164 as c18, d5165 as c19, d5166 as c20, d5167 as c21 } from '../descriptors/data/229.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1278 as d1278 } from '../descriptors/data/60.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1278;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyRequest"]:c0(),["RevokeDeliveryDependencyTarget"]:c1(),["SharedCodec1236"]:c2(),["SharedCodec1237"]:c3(),["SharedCodec1238"]:c4(),["SharedCodec1239"]:c5(),["SharedCodec1240"]:c6(),["SharedCodec1241"]:c7(),["SharedCodec1242"]:c8(),["SharedCodec1243"]:c9(),["SharedCodec1244"]:c10(),["SharedCodec1245"]:c11(),["SharedCodec1246"]:c12(),["SharedCodec1247"]:c13(),["SharedCodec1248"]:c14(),["SharedCodec1249"]:c15(),["SharedCodec1250"]:c16(),["SharedCodec1251"]:c17(),["SharedCodec1252"]:c18(),["SharedCodec1253"]:c19(),["SharedCodec1254"]:c20(),["SharedCodec1255"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
