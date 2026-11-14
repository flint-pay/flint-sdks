import { d270 as c0 } from '../descriptors/data/14.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6990 as c1, d6995 as c7, d6996 as c8, d6997 as c9 } from '../descriptors/data/327.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7016 as c2, d7017 as c3, d7018 as c4, d7019 as c5, d7015 as c6, d7012 as c10, d7013 as c11, d7014 as c12 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d270 as d270 } from '../descriptors/data/14.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec303"]:c3(),["SharedCodec304"]:c4(),["SharedCodec305"]:c5(),["SharedCodec306"]:c6(),["SharedCodec307"]:c7(),["SharedCodec308"]:c8(),["SharedCodec309"]:c9(),["SharedCodec789"]:c10(),["SharedCodec790"]:c11(),["SharedCodec791"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
