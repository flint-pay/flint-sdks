import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1376 as c1 } from '../descriptors/data/66.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8352 as c2 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8354 as c3, d8356 as c4, d8358 as c5, d8361 as c6, d8362 as c7, d8365 as c8, d8366 as c9, d8367 as c10, d8368 as c11, d8369 as c12, d8370 as c13, d8371 as c14 } from '../descriptors/data/410.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8374 as c15, d8375 as c16, d8376 as c17, d8377 as c18 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1376 as d1376 } from '../descriptors/data/66.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1376;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1483"]:c6(),["SharedCodec1484"]:c7(),["SharedCodec1487"]:c8(),["SharedCodec1488"]:c9(),["SharedCodec1489"]:c10(),["SharedCodec1490"]:c11(),["SharedCodec1491"]:c12(),["SharedCodec1492"]:c13(),["SharedCodec1493"]:c14(),["SharedCodec1496"]:c15(),["SharedCodec1497"]:c16(),["SharedCodec1498"]:c17(),["SharedCodec1499"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
