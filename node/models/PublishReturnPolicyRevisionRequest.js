import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1639 as c1 } from '../descriptors/data/81.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10208 as c2, d10210 as c3, d10212 as c4, d10214 as c5, d10216 as c6 } from '../descriptors/data/478.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10219 as c7, d10220 as c8, d10221 as c9, d10222 as c10, d10223 as c11, d10224 as c12, d10225 as c13, d10226 as c14, d10227 as c15, d10228 as c16, d10229 as c17, d10230 as c18, d10231 as c19, d10232 as c20, d10233 as c21 } from '../descriptors/data/479.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1639 as d1639 } from '../descriptors/data/81.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1639;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2644"]:c7(),["SharedCodec2645"]:c8(),["SharedCodec2646"]:c9(),["SharedCodec2647"]:c10(),["SharedCodec2648"]:c11(),["SharedCodec2649"]:c12(),["SharedCodec2650"]:c13(),["SharedCodec2651"]:c14(),["SharedCodec2652"]:c15(),["SharedCodec2653"]:c16(),["SharedCodec2654"]:c17(),["SharedCodec2655"]:c18(),["SharedCodec2656"]:c19(),["SharedCodec2657"]:c20(),["SharedCodec2658"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
