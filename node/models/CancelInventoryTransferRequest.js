import { d124 as c0 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7929 as c1 } from '../descriptors/data/367.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c2, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c8, d7851 as c9, d7852 as c10, d7848 as c11 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7944 as c6, d7945 as c7 } from '../descriptors/data/368.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d124 as d124 } from '../descriptors/data/6.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d124;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec172"]:c6(),["SharedCodec173"]:c7(),["SharedCodec385"]:c8(),["SharedCodec386"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
