import { d7819 as c0, d7824 as c1, d7825 as c2, d7826 as c3, d7827 as c4, d7828 as c5 } from '../descriptors/data/362.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7819 as d7819 } from '../descriptors/data/362.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7819;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1050"]:c1(),["SharedCodec1051"]:c2(),["SharedCodec1052"]:c3(),["SharedCodec1053"]:c4(),["SharedCodec1054"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
