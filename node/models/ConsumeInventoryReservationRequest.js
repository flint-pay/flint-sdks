import { d196 as c0 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7929 as c1, d7918 as c7 } from '../descriptors/data/367.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7849 as c2, d7845 as c3, d7846 as c4, d7847 as c5, d7850 as c8, d7851 as c9, d7852 as c10, d7848 as c11 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7917 as c6 } from '../descriptors/data/366.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d196 as d196 } from '../descriptors/data/8.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d196;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1047"]:c3(),["SharedCodec1048"]:c4(),["SharedCodec1049"]:c5(),["SharedCodec271"]:c6(),["SharedCodec272"]:c7(),["SharedCodec385"]:c8(),["SharedCodec386"]:c9(),["SharedCodec387"]:c10(),["SharedCodec388"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
