import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1232 as c1 } from '../descriptors/data/57.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6548 as c2, d6549 as c3, d6550 as c4, d6551 as c5, d6556 as c6, d6557 as c7, d6558 as c8, d6559 as c9, d6560 as c10, d6561 as c11, d6562 as c12 } from '../descriptors/data/309.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6565 as c13, d6566 as c14, d6567 as c15, d6568 as c16 } from '../descriptors/data/310.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1232 as d1232 } from '../descriptors/data/57.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScope"]:c2(),["ReturnRestockingFeePolicy"]:c3(),["ReturnShippingPolicy"]:c4(),["ReturnWindow"]:c5(),["SharedCodec1177"]:c6(),["SharedCodec1178"]:c7(),["SharedCodec1179"]:c8(),["SharedCodec1180"]:c9(),["SharedCodec1181"]:c10(),["SharedCodec1182"]:c11(),["SharedCodec1183"]:c12(),["SharedCodec1186"]:c13(),["SharedCodec1187"]:c14(),["SharedCodec1188"]:c15(),["SharedCodec1189"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
