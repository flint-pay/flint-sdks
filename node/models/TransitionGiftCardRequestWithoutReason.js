import { d3972 as c0 } from '../descriptors/data/168.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2429 as c1 } from '../descriptors/data/96.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2429 as d2429 } from '../descriptors/data/96.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1170"]:c0(),["TransitionGiftCardRequestWithoutReason"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTransitionGiftCardRequestWithoutReason(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
