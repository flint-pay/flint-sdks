import { d597 as c0 } from '../descriptors/data/34.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7097 as c1 } from '../descriptors/data/335.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c2, d7018 as c3, d7019 as c4, d7020 as c5, d7016 as c6, d7013 as c9, d7014 as c10, d7015 as c11 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7132 as c7, d7133 as c8 } from '../descriptors/data/336.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d597 as d597 } from '../descriptors/data/34.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d597;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec301"]:c3(),["SharedCodec302"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec674"]:c7(),["SharedCodec675"]:c8(),["SharedCodec792"]:c9(),["SharedCodec793"]:c10(),["SharedCodec794"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
