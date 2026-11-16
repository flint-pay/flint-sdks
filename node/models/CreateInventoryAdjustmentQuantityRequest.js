import { d301 as c0 } from '../descriptors/data/15.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8844 as c1 } from '../descriptors/data/398.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8872 as c2, d8868 as c3, d8869 as c4, d8870 as c5, d8873 as c6, d8874 as c7, d8875 as c8, d8871 as c9 } from '../descriptors/data/399.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d301 as d301 } from '../descriptors/data/15.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d301;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentQuantityRequest"]:c0(),["InventoryAdjustmentQuantityLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1373"]:c3(),["SharedCodec1374"]:c4(),["SharedCodec1375"]:c5(),["SharedCodec442"]:c6(),["SharedCodec443"]:c7(),["SharedCodec444"]:c8(),["SharedCodec445"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
