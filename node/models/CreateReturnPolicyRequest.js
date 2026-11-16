import { d342 as c0 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8382 as c3, d8384 as c4, d8386 as c5, d8388 as c6, d8390 as c7 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8393 as c8, d8394 as c9, d8395 as c10, d8396 as c11, d8397 as c12, d8398 as c13, d8399 as c14, d8400 as c15, d8401 as c16, d8402 as c17, d8403 as c18, d8404 as c19, d8405 as c20, d8406 as c21, d8407 as c22 } from '../descriptors/data/411.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d342 as d342 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d342;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec1480"]:c8(),["SharedCodec1481"]:c9(),["SharedCodec1482"]:c10(),["SharedCodec1483"]:c11(),["SharedCodec1484"]:c12(),["SharedCodec1485"]:c13(),["SharedCodec1486"]:c14(),["SharedCodec1487"]:c15(),["SharedCodec1488"]:c16(),["SharedCodec1489"]:c17(),["SharedCodec1490"]:c18(),["SharedCodec1491"]:c19(),["SharedCodec1492"]:c20(),["SharedCodec1493"]:c21(),["SharedCodec1494"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
