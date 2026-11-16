import { d8433 as c0 } from '../descriptors/data/372.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8434 as c1 } from '../descriptors/data/373.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10263 as c3, d10265 as c5, d10266 as c6, d10267 as c7 } from '../descriptors/data/481.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8543 as c4 } from '../descriptors/data/379.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10268 as c8, d10269 as c9, d10270 as c10, d10271 as c11, d10272 as c12 } from '../descriptors/data/482.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10263 as d10263 } from '../descriptors/data/481.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["ReturnReplacementLineItemRequest"]:c3(),["SharedCodec185"]:c4(),["SharedCodec2687"]:c5(),["SharedCodec2688"]:c6(),["SharedCodec2689"]:c7(),["SharedCodec2690"]:c8(),["SharedCodec2691"]:c9(),["SharedCodec2693"]:c10(),["SharedCodec2694"]:c11(),["SharedCodec2695"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
