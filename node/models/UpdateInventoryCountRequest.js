import { d7037 as c0 } from '../descriptors/data/331.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7016 as c1, d7017 as c2, d7018 as c3, d7019 as c4, d7015 as c5, d7012 as c6, d7013 as c7, d7014 as c8 } from '../descriptors/data/330.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5648 as c9 } from '../descriptors/data/247.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5648 as d5648 } from '../descriptors/data/247.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec295"]:c2(),["SharedCodec296"]:c3(),["SharedCodec297"]:c4(),["SharedCodec298"]:c5(),["SharedCodec790"]:c6(),["SharedCodec791"]:c7(),["SharedCodec792"]:c8(),["UpdateInventoryCountRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
