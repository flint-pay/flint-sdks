import { d5072 as c0, d5073 as c1 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d5073 as d5073 } from '../descriptors/data/232.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5073;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicy"]:c0(),["InventorySettings"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
