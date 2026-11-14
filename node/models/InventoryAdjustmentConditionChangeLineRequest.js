import { d6987 as c0 } from '../descriptors/data/329.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7003 as c1, d7004 as c2, d7005 as c3, d7006 as c4, d7007 as c5 } from '../descriptors/data/330.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6987 as d6987 } from '../descriptors/data/329.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6987;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec795"]:c1(),["SharedCodec796"]:c2(),["SharedCodec797"]:c3(),["SharedCodec798"]:c4(),["SharedCodec799"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
