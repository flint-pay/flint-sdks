import { d775 as c0 } from '../descriptors/data/33.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d775 as d775 } from '../descriptors/data/33.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d775;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LookupGiftCardRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLookupGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
