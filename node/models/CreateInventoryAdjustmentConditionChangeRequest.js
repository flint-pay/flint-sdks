import { d268 as c0 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6987 as c1 } from '../descriptors/data/329.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c2, d7018 as c3, d7019 as c4, d7020 as c5, d7016 as c6, d7013 as c7, d7014 as c8, d7015 as c9 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7003 as c10, d7004 as c11, d7005 as c12, d7006 as c13, d7007 as c14 } from '../descriptors/data/330.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d268 as d268 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec301"]:c3(),["SharedCodec302"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec792"]:c7(),["SharedCodec793"]:c8(),["SharedCodec794"]:c9(),["SharedCodec795"]:c10(),["SharedCodec796"]:c11(),["SharedCodec797"]:c12(),["SharedCodec798"]:c13(),["SharedCodec799"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
