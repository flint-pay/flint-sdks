import { d6986 as c0 } from '../descriptors/data/328.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7002 as c1, d7003 as c2, d7004 as c3, d7005 as c4, d7006 as c5 } from '../descriptors/data/329.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6986 as d6986 } from '../descriptors/data/328.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6986;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec793"]:c1(),["SharedCodec794"]:c2(),["SharedCodec795"]:c3(),["SharedCodec796"]:c4(),["SharedCodec797"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
