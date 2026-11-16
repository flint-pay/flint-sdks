import { d10065 as c0 } from '../descriptors/data/469.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9345 as c1, d9346 as c2, d9347 as c3, d9348 as c4, d9349 as c5 } from '../descriptors/data/427.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10065 as d10065 } from '../descriptors/data/469.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10065;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec2356"]:c1(),["SharedCodec2357"]:c2(),["SharedCodec2358"]:c3(),["SharedCodec2359"]:c4(),["SharedCodec2360"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
