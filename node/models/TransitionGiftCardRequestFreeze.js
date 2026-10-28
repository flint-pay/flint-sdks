import { d2428 as c0 } from '../descriptors/data/96.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d2428 as d2428 } from '../descriptors/data/96.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TransitionGiftCardRequestFreeze"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestFreeze(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
