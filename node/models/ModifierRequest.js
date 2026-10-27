import { d4488 as c0 } from '../descriptors/data/197.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4488 as d4488 } from '../descriptors/data/197.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ModifierRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
