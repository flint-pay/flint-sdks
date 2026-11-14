import { d7096 as c0 } from '../descriptors/data/332.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7016 as c1, d7017 as c5, d7018 as c6, d7019 as c7, d7015 as c8, d7012 as c9, d7013 as c10, d7014 as c11 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1375 as c2 } from '../descriptors/data/65.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7113 as c3, d7114 as c4 } from '../descriptors/data/333.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1375 as d1375 } from '../descriptors/data/65.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReturnInventoryTransferToOriginRequest"]:c2(),["SharedCodec1481"]:c3(),["SharedCodec1482"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["SharedCodec306"]:c8(),["SharedCodec789"]:c9(),["SharedCodec790"]:c10(),["SharedCodec791"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInventoryTransferToOriginRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
