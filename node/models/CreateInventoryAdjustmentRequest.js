import { d268 as c0 } from '../descriptors/data/14.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6986 as c1 } from '../descriptors/data/328.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6988 as c2, d6990 as c3, d6995 as c9, d6996 as c10, d6997 as c11, d6998 as c12, d6999 as c13, d7000 as c14, d7001 as c15, d7002 as c19, d7003 as c20, d7004 as c21, d7005 as c22, d7006 as c23 } from '../descriptors/data/329.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7016 as c4, d7017 as c5, d7018 as c6, d7019 as c7, d7015 as c8, d7012 as c16, d7013 as c17, d7014 as c18 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d268 as d268 } from '../descriptors/data/14.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec295"]:c5(),["SharedCodec296"]:c6(),["SharedCodec297"]:c7(),["SharedCodec298"]:c8(),["SharedCodec299"]:c9(),["SharedCodec300"]:c10(),["SharedCodec301"]:c11(),["SharedCodec302"]:c12(),["SharedCodec303"]:c13(),["SharedCodec304"]:c14(),["SharedCodec305"]:c15(),["SharedCodec790"]:c16(),["SharedCodec791"]:c17(),["SharedCodec792"]:c18(),["SharedCodec793"]:c19(),["SharedCodec794"]:c20(),["SharedCodec795"]:c21(),["SharedCodec796"]:c22(),["SharedCodec797"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
