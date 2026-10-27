import { d418 as c0 } from '../descriptors/data/23.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d418 as d418 } from '../descriptors/data/23.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
