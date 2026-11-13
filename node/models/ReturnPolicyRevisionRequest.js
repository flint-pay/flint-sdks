import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8303 as c1, d8305 as c2, d8307 as c3, d8309 as c4, d8311 as c5, d8314 as c6, d8315 as c7, d8316 as c8, d8317 as c9, d8318 as c10, d8319 as c11 } from '../descriptors/data/403.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8320 as c12, d8321 as c13, d8322 as c14, d8323 as c15, d8324 as c16, d8325 as c17, d8326 as c18, d8327 as c19, d8328 as c20 } from '../descriptors/data/404.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8303 as d8303 } from '../descriptors/data/403.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8303;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1488"]:c6(),["SharedCodec1489"]:c7(),["SharedCodec1490"]:c8(),["SharedCodec1491"]:c9(),["SharedCodec1492"]:c10(),["SharedCodec1493"]:c11(),["SharedCodec1494"]:c12(),["SharedCodec1495"]:c13(),["SharedCodec1496"]:c14(),["SharedCodec1497"]:c15(),["SharedCodec1498"]:c16(),["SharedCodec1499"]:c17(),["SharedCodec1500"]:c18(),["SharedCodec1501"]:c19(),["SharedCodec1502"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
