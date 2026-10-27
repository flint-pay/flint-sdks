import { d4486 as c0 } from '../descriptors/data/197.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4486 as d4486 } from '../descriptors/data/197.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
