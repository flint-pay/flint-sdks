import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1154 as c1 } from '../descriptors/data/54.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1233 as c2 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6548 as c3, d6549 as c4, d6550 as c5, d6551 as c6, d6554 as c7, d6555 as c8, d6556 as c9, d6557 as c10, d6558 as c11, d6559 as c12, d6560 as c13, d6561 as c14, d6562 as c15, d6563 as c16, d6564 as c17 } from '../descriptors/data/309.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6565 as c18, d6566 as c19, d6567 as c20, d6568 as c21 } from '../descriptors/data/310.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1154 as d1154 } from '../descriptors/data/54.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec1175"]:c7(),["SharedCodec1176"]:c8(),["SharedCodec1177"]:c9(),["SharedCodec1178"]:c10(),["SharedCodec1179"]:c11(),["SharedCodec1180"]:c12(),["SharedCodec1181"]:c13(),["SharedCodec1182"]:c14(),["SharedCodec1183"]:c15(),["SharedCodec1184"]:c16(),["SharedCodec1185"]:c17(),["SharedCodec1186"]:c18(),["SharedCodec1187"]:c19(),["SharedCodec1188"]:c20(),["SharedCodec1189"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
