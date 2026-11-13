import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1369 as c1 } from '../descriptors/data/65.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8305 as c2, d8307 as c3, d8309 as c4, d8311 as c5, d8316 as c6, d8317 as c7, d8318 as c8, d8319 as c9 } from '../descriptors/data/403.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8320 as c10, d8321 as c11, d8322 as c12, d8325 as c13, d8326 as c14, d8327 as c15, d8328 as c16 } from '../descriptors/data/404.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1369 as d1369 } from '../descriptors/data/65.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1369;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1490"]:c6(),["SharedCodec1491"]:c7(),["SharedCodec1492"]:c8(),["SharedCodec1493"]:c9(),["SharedCodec1494"]:c10(),["SharedCodec1495"]:c11(),["SharedCodec1496"]:c12(),["SharedCodec1499"]:c13(),["SharedCodec1500"]:c14(),["SharedCodec1501"]:c15(),["SharedCodec1502"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
