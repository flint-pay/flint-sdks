import { d343 as c0 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8350 as c3, d8352 as c4 } from '../descriptors/data/409.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8354 as c5, d8356 as c6, d8358 as c7, d8361 as c8, d8362 as c9, d8363 as c10, d8364 as c11, d8365 as c12, d8366 as c13, d8367 as c14, d8368 as c15, d8369 as c16, d8370 as c17, d8371 as c18, d8372 as c19, d8373 as c20 } from '../descriptors/data/410.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8374 as c21, d8375 as c22, d8376 as c23, d8377 as c24 } from '../descriptors/data/411.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d343 as d343 } from '../descriptors/data/21.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec1483"]:c8(),["SharedCodec1484"]:c9(),["SharedCodec1485"]:c10(),["SharedCodec1486"]:c11(),["SharedCodec1487"]:c12(),["SharedCodec1488"]:c13(),["SharedCodec1489"]:c14(),["SharedCodec1490"]:c15(),["SharedCodec1491"]:c16(),["SharedCodec1492"]:c17(),["SharedCodec1493"]:c18(),["SharedCodec1494"]:c19(),["SharedCodec1495"]:c20(),["SharedCodec1496"]:c21(),["SharedCodec1497"]:c22(),["SharedCodec1498"]:c23(),["SharedCodec1499"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
