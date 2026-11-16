import { d7929 as c0 } from '../descriptors/data/367.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c1, d7845 as c2, d7846 as c3, d7847 as c4, d7850 as c5, d7851 as c6, d7852 as c7, d7848 as c8 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7929 as d7929 } from '../descriptors/data/367.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1047"]:c2(),["SharedCodec1048"]:c3(),["SharedCodec1049"]:c4(),["SharedCodec385"]:c5(),["SharedCodec386"]:c6(),["SharedCodec387"]:c7(),["SharedCodec388"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
