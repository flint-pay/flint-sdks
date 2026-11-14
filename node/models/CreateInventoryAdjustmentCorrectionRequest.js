import { d269 as c0 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6991 as c1, d6996 as c7, d6997 as c8, d6998 as c9 } from '../descriptors/data/330.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c2, d7018 as c3, d7019 as c4, d7020 as c5, d7016 as c6, d7013 as c10, d7014 as c11, d7015 as c12 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d269 as d269 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec301"]:c3(),["SharedCodec302"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec305"]:c7(),["SharedCodec306"]:c8(),["SharedCodec307"]:c9(),["SharedCodec792"]:c10(),["SharedCodec793"]:c11(),["SharedCodec794"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
