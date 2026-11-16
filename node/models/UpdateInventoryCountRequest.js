import { d7870 as c0 } from '../descriptors/data/364.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c1, d7845 as c2, d7846 as c3, d7847 as c4, d7850 as c5, d7851 as c6, d7852 as c7, d7848 as c8 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6481 as c9 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6481 as d6481 } from '../descriptors/data/280.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6481;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1047"]:c2(),["SharedCodec1048"]:c3(),["SharedCodec1049"]:c4(),["SharedCodec385"]:c5(),["SharedCodec386"]:c6(),["SharedCodec387"]:c7(),["SharedCodec388"]:c8(),["UpdateInventoryCountRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
