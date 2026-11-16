import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10208 as c1, d10210 as c2, d10212 as c3, d10214 as c4, d10216 as c5 } from '../descriptors/data/478.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10219 as c6, d10220 as c7, d10221 as c8, d10222 as c9, d10223 as c10, d10224 as c11, d10225 as c12, d10226 as c13, d10227 as c14, d10228 as c15, d10229 as c16, d10230 as c17, d10231 as c18, d10232 as c19, d10233 as c20 } from '../descriptors/data/479.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10208 as d10208 } from '../descriptors/data/478.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2644"]:c6(),["SharedCodec2645"]:c7(),["SharedCodec2646"]:c8(),["SharedCodec2647"]:c9(),["SharedCodec2648"]:c10(),["SharedCodec2649"]:c11(),["SharedCodec2650"]:c12(),["SharedCodec2651"]:c13(),["SharedCodec2652"]:c14(),["SharedCodec2653"]:c15(),["SharedCodec2654"]:c16(),["SharedCodec2655"]:c17(),["SharedCodec2656"]:c18(),["SharedCodec2657"]:c19(),["SharedCodec2658"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
