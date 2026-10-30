import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1233 as c1 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6548 as c2, d6549 as c3, d6550 as c4, d6551 as c5, d6554 as c6, d6555 as c7, d6556 as c8, d6557 as c9, d6558 as c10, d6559 as c11, d6560 as c12, d6561 as c13, d6562 as c14, d6563 as c15, d6564 as c16 } from '../descriptors/data/309.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6565 as c17, d6566 as c18, d6567 as c19, d6568 as c20 } from '../descriptors/data/310.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1233 as d1233 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1175"]:c6(),["SharedCodec1176"]:c7(),["SharedCodec1177"]:c8(),["SharedCodec1178"]:c9(),["SharedCodec1179"]:c10(),["SharedCodec1180"]:c11(),["SharedCodec1181"]:c12(),["SharedCodec1182"]:c13(),["SharedCodec1183"]:c14(),["SharedCodec1184"]:c15(),["SharedCodec1185"]:c16(),["SharedCodec1186"]:c17(),["SharedCodec1187"]:c18(),["SharedCodec1188"]:c19(),["SharedCodec1189"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
