import { d8842 as c0, d8847 as c1, d8848 as c2, d8849 as c3, d8850 as c4, d8851 as c5 } from '../descriptors/data/398.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8842 as d8842 } from '../descriptors/data/398.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1376"]:c1(),["SharedCodec1377"]:c2(),["SharedCodec1378"]:c3(),["SharedCodec1379"]:c4(),["SharedCodec1380"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
