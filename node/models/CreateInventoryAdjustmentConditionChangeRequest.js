import { d267 as c0 } from '../descriptors/data/14.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7819 as c1, d7824 as c6, d7825 as c7, d7826 as c8, d7827 as c9, d7828 as c10 } from '../descriptors/data/362.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c2, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c11, d7851 as c12, d7852 as c13, d7848 as c14 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d267 as d267 } from '../descriptors/data/14.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec1050"]:c6(),["SharedCodec1051"]:c7(),["SharedCodec1052"]:c8(),["SharedCodec1053"]:c9(),["SharedCodec1054"]:c10(),["SharedCodec385"]:c11(),["SharedCodec386"]:c12(),["SharedCodec387"]:c13(),["SharedCodec388"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
