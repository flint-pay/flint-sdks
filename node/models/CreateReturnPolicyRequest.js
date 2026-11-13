import { d340 as c0 } from '../descriptors/data/21.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c1 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c2 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8303 as c3, d8305 as c4, d8307 as c5, d8309 as c6, d8311 as c7, d8314 as c8, d8315 as c9, d8316 as c10, d8317 as c11, d8318 as c12, d8319 as c13 } from '../descriptors/data/403.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8320 as c14, d8321 as c15, d8322 as c16, d8323 as c17, d8324 as c18, d8325 as c19, d8326 as c20, d8327 as c21, d8328 as c22 } from '../descriptors/data/404.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d340 as d340 } from '../descriptors/data/21.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d340;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec1488"]:c8(),["SharedCodec1489"]:c9(),["SharedCodec1490"]:c10(),["SharedCodec1491"]:c11(),["SharedCodec1492"]:c12(),["SharedCodec1493"]:c13(),["SharedCodec1494"]:c14(),["SharedCodec1495"]:c15(),["SharedCodec1496"]:c16(),["SharedCodec1497"]:c17(),["SharedCodec1498"]:c18(),["SharedCodec1499"]:c19(),["SharedCodec1500"]:c20(),["SharedCodec1501"]:c21(),["SharedCodec1502"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
