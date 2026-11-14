import { d7096 as c0, d7105 as c3, d7106 as c4, d7107 as c5, d7108 as c6, d7109 as c7 } from '../descriptors/data/332.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7016 as c1, d7017 as c9, d7018 as c10, d7019 as c11, d7015 as c12, d7012 as c13, d7013 as c14, d7014 as c15 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1299 as c2 } from '../descriptors/data/63.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7110 as c8 } from '../descriptors/data/333.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1299 as d1299 } from '../descriptors/data/63.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1299;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1400"]:c3(),["SharedCodec1401"]:c4(),["SharedCodec1402"]:c5(),["SharedCodec1403"]:c6(),["SharedCodec1404"]:c7(),["SharedCodec1405"]:c8(),["SharedCodec303"]:c9(),["SharedCodec304"]:c10(),["SharedCodec305"]:c11(),["SharedCodec306"]:c12(),["SharedCodec789"]:c13(),["SharedCodec790"]:c14(),["SharedCodec791"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
