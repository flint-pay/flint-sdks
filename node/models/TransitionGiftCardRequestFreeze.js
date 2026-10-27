import { d2428 as c0 } from '../descriptors/data/96.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2428 as d2428 } from '../descriptors/data/96.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TransitionGiftCardRequestFreeze"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestFreeze(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
