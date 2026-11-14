import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1375 as c1 } from '../descriptors/data/65.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8352 as c2 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8354 as c3, d8356 as c4, d8358 as c5, d8361 as c6, d8362 as c7, d8363 as c8, d8364 as c9, d8365 as c10, d8366 as c11 } from '../descriptors/data/410.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8374 as c12, d8375 as c13, d8376 as c14, d8377 as c15 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1375 as d1375 } from '../descriptors/data/65.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1483"]:c6(),["SharedCodec1484"]:c7(),["SharedCodec1485"]:c8(),["SharedCodec1486"]:c9(),["SharedCodec1487"]:c10(),["SharedCodec1488"]:c11(),["SharedCodec1496"]:c12(),["SharedCodec1497"]:c13(),["SharedCodec1498"]:c14(),["SharedCodec1499"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
