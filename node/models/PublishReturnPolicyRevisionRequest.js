import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1282 as c1 } from '../descriptors/data/62.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8303 as c2, d8305 as c3, d8307 as c4, d8309 as c5, d8311 as c6, d8314 as c7, d8315 as c8, d8316 as c9, d8317 as c10, d8318 as c11, d8319 as c12 } from '../descriptors/data/403.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8320 as c13, d8321 as c14, d8322 as c15, d8323 as c16, d8324 as c17, d8325 as c18, d8326 as c19, d8327 as c20, d8328 as c21 } from '../descriptors/data/404.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1282 as d1282 } from '../descriptors/data/62.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1488"]:c7(),["SharedCodec1489"]:c8(),["SharedCodec1490"]:c9(),["SharedCodec1491"]:c10(),["SharedCodec1492"]:c11(),["SharedCodec1493"]:c12(),["SharedCodec1494"]:c13(),["SharedCodec1495"]:c14(),["SharedCodec1496"]:c15(),["SharedCodec1497"]:c16(),["SharedCodec1498"]:c17(),["SharedCodec1499"]:c18(),["SharedCodec1500"]:c19(),["SharedCodec1501"]:c20(),["SharedCodec1502"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
