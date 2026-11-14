import { d7116 as c0, d7117 as c1, d7118 as c2 } from '../descriptors/data/336.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5658 as c3 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5658 as d5658 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5658;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1721"]:c0(),["SharedCodec1722"]:c1(),["SharedCodec1723"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
