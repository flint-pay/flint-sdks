import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1290 as c1 } from '../descriptors/data/62.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8382 as c2, d8384 as c3, d8386 as c4, d8388 as c5, d8390 as c6 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8393 as c7, d8394 as c8, d8395 as c9, d8396 as c10, d8397 as c11, d8398 as c12, d8399 as c13, d8400 as c14, d8401 as c15, d8402 as c16, d8403 as c17, d8404 as c18, d8405 as c19, d8406 as c20, d8407 as c21 } from '../descriptors/data/411.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1290 as d1290 } from '../descriptors/data/62.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1480"]:c7(),["SharedCodec1481"]:c8(),["SharedCodec1482"]:c9(),["SharedCodec1483"]:c10(),["SharedCodec1484"]:c11(),["SharedCodec1485"]:c12(),["SharedCodec1486"]:c13(),["SharedCodec1487"]:c14(),["SharedCodec1488"]:c15(),["SharedCodec1489"]:c16(),["SharedCodec1490"]:c17(),["SharedCodec1491"]:c18(),["SharedCodec1492"]:c19(),["SharedCodec1493"]:c20(),["SharedCodec1494"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
