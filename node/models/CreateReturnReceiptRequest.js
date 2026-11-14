import { d354 as c0 } from '../descriptors/data/22.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8475 as c1 } from '../descriptors/data/415.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8477 as c2, d8485 as c7, d8486 as c8, d8487 as c9, d8488 as c10, d8489 as c11, d8490 as c12 } from '../descriptors/data/416.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8431 as c3 } from '../descriptors/data/412.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8337 as c4, d8338 as c5, d8339 as c6 } from '../descriptors/data/405.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7015 as c13 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d354 as d354 } from '../descriptors/data/22.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1470"]:c4(),["SharedCodec1471"]:c5(),["SharedCodec1472"]:c6(),["SharedCodec1508"]:c7(),["SharedCodec1509"]:c8(),["SharedCodec1510"]:c9(),["SharedCodec1511"]:c10(),["SharedCodec1512"]:c11(),["SharedCodec1513"]:c12(),["SharedCodec306"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
