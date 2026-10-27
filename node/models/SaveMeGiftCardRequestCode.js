import { d953 as c0 } from '../descriptors/data/42.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4316 as c1, d4317 as c2 } from '../descriptors/data/189.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d953 as d953 } from '../descriptors/data/42.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d953;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestCode"]:c0(),["SharedCodec1136"]:c1(),["SharedCodec1137"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
