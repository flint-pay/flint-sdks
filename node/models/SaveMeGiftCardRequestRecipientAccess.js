import { d1430 as c0 } from '../descriptors/data/68.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7362 as c1 } from '../descriptors/data/352.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1430 as d1430 } from '../descriptors/data/68.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1430;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestRecipientAccess"]:c0(),["SharedCodec1532"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
