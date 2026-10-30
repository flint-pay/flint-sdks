import { d283 as c0 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1233 as c3 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6548 as c4, d6549 as c5, d6550 as c6, d6551 as c7, d6554 as c8, d6555 as c9, d6556 as c10, d6557 as c11, d6558 as c12, d6559 as c13, d6560 as c14, d6561 as c15, d6562 as c16, d6563 as c17, d6564 as c18 } from '../descriptors/data/309.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6565 as c19, d6566 as c20, d6567 as c21, d6568 as c22 } from '../descriptors/data/310.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d283 as d283 } from '../descriptors/data/16.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d283;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScope"]:c4(),["ReturnRestockingFeePolicy"]:c5(),["ReturnShippingPolicy"]:c6(),["ReturnWindow"]:c7(),["SharedCodec1175"]:c8(),["SharedCodec1176"]:c9(),["SharedCodec1177"]:c10(),["SharedCodec1178"]:c11(),["SharedCodec1179"]:c12(),["SharedCodec1180"]:c13(),["SharedCodec1181"]:c14(),["SharedCodec1182"]:c15(),["SharedCodec1183"]:c16(),["SharedCodec1184"]:c17(),["SharedCodec1185"]:c18(),["SharedCodec1186"]:c19(),["SharedCodec1187"]:c20(),["SharedCodec1188"]:c21(),["SharedCodec1189"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
