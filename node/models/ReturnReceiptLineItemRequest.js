import { d10288 as c0, d10289 as c2, d10290 as c3, d10291 as c4, d10292 as c5, d10293 as c6, d10294 as c7 } from '../descriptors/data/483.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10304 as c1 } from '../descriptors/data/484.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10288 as d10288 } from '../descriptors/data/483.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2664"]:c2(),["SharedCodec2665"]:c3(),["SharedCodec2666"]:c4(),["SharedCodec2671"]:c5(),["SharedCodec2672"]:c6(),["SharedCodec2673"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
