import { d7096 as c0, d7105 as c3, d7106 as c4, d7107 as c5, d7108 as c6, d7109 as c7 } from '../descriptors/data/334.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7016 as c1, d7017 as c9, d7018 as c10, d7019 as c11, d7015 as c12, d7012 as c13, d7013 as c14, d7014 as c15 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1292 as c2 } from '../descriptors/data/62.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7110 as c8 } from '../descriptors/data/335.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1292 as d1292 } from '../descriptors/data/62.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1383"]:c3(),["SharedCodec1384"]:c4(),["SharedCodec1385"]:c5(),["SharedCodec1386"]:c6(),["SharedCodec1387"]:c7(),["SharedCodec1388"]:c8(),["SharedCodec295"]:c9(),["SharedCodec296"]:c10(),["SharedCodec297"]:c11(),["SharedCodec298"]:c12(),["SharedCodec790"]:c13(),["SharedCodec791"]:c14(),["SharedCodec792"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
