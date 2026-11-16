import { d7640 as c0 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1765 as c1 } from '../descriptors/data/88.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10210 as c2, d10212 as c3, d10214 as c4, d10216 as c5 } from '../descriptors/data/478.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10219 as c6, d10220 as c7, d10221 as c8, d10222 as c9, d10230 as c10, d10231 as c11, d10232 as c12, d10233 as c13 } from '../descriptors/data/479.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1765 as d1765 } from '../descriptors/data/88.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2644"]:c6(),["SharedCodec2645"]:c7(),["SharedCodec2646"]:c8(),["SharedCodec2647"]:c9(),["SharedCodec2655"]:c10(),["SharedCodec2656"]:c11(),["SharedCodec2657"]:c12(),["SharedCodec2658"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
