import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8350 as c1, d8352 as c2 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8354 as c3, d8356 as c4, d8358 as c5, d8361 as c6, d8362 as c7, d8363 as c8, d8364 as c9, d8365 as c10, d8366 as c11, d8367 as c12, d8368 as c13, d8369 as c14, d8370 as c15, d8371 as c16, d8372 as c17, d8373 as c18 } from '../descriptors/data/410.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8374 as c19, d8375 as c20, d8376 as c21, d8377 as c22 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8350 as d8350 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1483"]:c6(),["SharedCodec1484"]:c7(),["SharedCodec1485"]:c8(),["SharedCodec1486"]:c9(),["SharedCodec1487"]:c10(),["SharedCodec1488"]:c11(),["SharedCodec1489"]:c12(),["SharedCodec1490"]:c13(),["SharedCodec1491"]:c14(),["SharedCodec1492"]:c15(),["SharedCodec1493"]:c16(),["SharedCodec1494"]:c17(),["SharedCodec1495"]:c18(),["SharedCodec1496"]:c19(),["SharedCodec1497"]:c20(),["SharedCodec1498"]:c21(),["SharedCodec1499"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
