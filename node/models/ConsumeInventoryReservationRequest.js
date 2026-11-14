import { d197 as c0 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7096 as c1 } from '../descriptors/data/332.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7016 as c2, d7017 as c5, d7018 as c6, d7019 as c7, d7015 as c8, d7012 as c9, d7013 as c10, d7014 as c11 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7079 as c3, d7080 as c4 } from '../descriptors/data/331.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d197 as d197 } from '../descriptors/data/8.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec190"]:c3(),["SharedCodec191"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["SharedCodec306"]:c8(),["SharedCodec789"]:c9(),["SharedCodec790"]:c10(),["SharedCodec791"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
