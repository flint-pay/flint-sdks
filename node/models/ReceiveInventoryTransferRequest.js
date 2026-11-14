import { d7097 as c0, d7106 as c3, d7107 as c4, d7108 as c5, d7109 as c6, d7110 as c7 } from '../descriptors/data/335.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c1, d7018 as c9, d7019 as c10, d7020 as c11, d7016 as c12, d7013 as c13, d7014 as c14, d7015 as c15 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1298 as c2 } from '../descriptors/data/63.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7111 as c8 } from '../descriptors/data/336.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1298 as d1298 } from '../descriptors/data/63.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1393"]:c3(),["SharedCodec1394"]:c4(),["SharedCodec1395"]:c5(),["SharedCodec1396"]:c6(),["SharedCodec1397"]:c7(),["SharedCodec1398"]:c8(),["SharedCodec301"]:c9(),["SharedCodec302"]:c10(),["SharedCodec303"]:c11(),["SharedCodec304"]:c12(),["SharedCodec792"]:c13(),["SharedCodec793"]:c14(),["SharedCodec794"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
