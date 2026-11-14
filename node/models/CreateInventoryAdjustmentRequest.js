import { d272 as c0 } from '../descriptors/data/14.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6986 as c1 } from '../descriptors/data/326.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6988 as c2, d6990 as c3, d6995 as c9, d6996 as c10, d6997 as c11, d6998 as c12, d6999 as c13, d7000 as c14, d7001 as c15, d7002 as c19, d7003 as c20, d7004 as c21, d7005 as c22, d7006 as c23 } from '../descriptors/data/327.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7016 as c4, d7017 as c5, d7018 as c6, d7019 as c7, d7015 as c8, d7012 as c16, d7013 as c17, d7014 as c18 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d272 as d272 } from '../descriptors/data/14.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["SharedCodec306"]:c8(),["SharedCodec307"]:c9(),["SharedCodec308"]:c10(),["SharedCodec309"]:c11(),["SharedCodec310"]:c12(),["SharedCodec311"]:c13(),["SharedCodec312"]:c14(),["SharedCodec313"]:c15(),["SharedCodec789"]:c16(),["SharedCodec790"]:c17(),["SharedCodec791"]:c18(),["SharedCodec792"]:c19(),["SharedCodec793"]:c20(),["SharedCodec794"]:c21(),["SharedCodec795"]:c22(),["SharedCodec796"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
