import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1287 as c1 } from '../descriptors/data/62.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8350 as c2, d8352 as c3 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8354 as c4, d8356 as c5, d8358 as c6, d8361 as c7, d8362 as c8, d8363 as c9, d8364 as c10, d8365 as c11, d8366 as c12, d8367 as c13, d8368 as c14, d8369 as c15, d8370 as c16, d8371 as c17, d8372 as c18, d8373 as c19 } from '../descriptors/data/410.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8374 as c20, d8375 as c21, d8376 as c22, d8377 as c23 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1287 as d1287 } from '../descriptors/data/62.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1483"]:c7(),["SharedCodec1484"]:c8(),["SharedCodec1485"]:c9(),["SharedCodec1486"]:c10(),["SharedCodec1487"]:c11(),["SharedCodec1488"]:c12(),["SharedCodec1489"]:c13(),["SharedCodec1490"]:c14(),["SharedCodec1491"]:c15(),["SharedCodec1492"]:c16(),["SharedCodec1493"]:c17(),["SharedCodec1494"]:c18(),["SharedCodec1495"]:c19(),["SharedCodec1496"]:c20(),["SharedCodec1497"]:c21(),["SharedCodec1498"]:c22(),["SharedCodec1499"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
