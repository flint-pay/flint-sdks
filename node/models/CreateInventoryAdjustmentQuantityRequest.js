import { d268 as c0 } from '../descriptors/data/14.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6990 as c1 } from '../descriptors/data/329.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7018 as c2, d7019 as c3, d7020 as c4, d7021 as c5, d7017 as c6, d7014 as c7, d7015 as c8, d7016 as c9 } from '../descriptors/data/330.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d268 as d268 } from '../descriptors/data/14.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentQuantityRequest"]:c0(),["InventoryAdjustmentQuantityLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec295"]:c3(),["SharedCodec296"]:c4(),["SharedCodec297"]:c5(),["SharedCodec298"]:c6(),["SharedCodec790"]:c7(),["SharedCodec791"]:c8(),["SharedCodec792"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
