import { d7097 as c0 } from '../descriptors/data/335.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c1, d7018 as c2, d7019 as c3, d7020 as c4, d7016 as c5, d7013 as c6, d7014 as c7, d7015 as c8 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7097 as d7097 } from '../descriptors/data/335.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7097;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec301"]:c2(),["SharedCodec302"]:c3(),["SharedCodec303"]:c4(),["SharedCodec304"]:c5(),["SharedCodec792"]:c6(),["SharedCodec793"]:c7(),["SharedCodec794"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
