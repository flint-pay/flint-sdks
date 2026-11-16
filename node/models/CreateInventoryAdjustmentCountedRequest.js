import { d269 as c0 } from '../descriptors/data/14.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7823 as c1, d7833 as c10, d7834 as c11, d7835 as c12 } from '../descriptors/data/362.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c2, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c6, d7851 as c7, d7852 as c8, d7848 as c9 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d269 as d269 } from '../descriptors/data/14.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec385"]:c6(),["SharedCodec386"]:c7(),["SharedCodec387"]:c8(),["SharedCodec388"]:c9(),["SharedCodec389"]:c10(),["SharedCodec390"]:c11(),["SharedCodec391"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
