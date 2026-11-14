import { d7097 as c0 } from '../descriptors/data/335.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c1, d7018 as c5, d7019 as c6, d7020 as c7, d7016 as c8, d7013 as c9, d7014 as c10, d7015 as c11 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1327 as c2 } from '../descriptors/data/64.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7112 as c3, d7113 as c4 } from '../descriptors/data/336.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1327 as d1327 } from '../descriptors/data/64.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1327;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReportInventoryTransferLossRequest"]:c2(),["SharedCodec1428"]:c3(),["SharedCodec1429"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec792"]:c9(),["SharedCodec793"]:c10(),["SharedCodec794"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
