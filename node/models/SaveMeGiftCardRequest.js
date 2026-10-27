import { d952 as c0 } from '../descriptors/data/42.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4315 as c1, d4316 as c2, d4317 as c3, d4318 as c4, d4319 as c5 } from '../descriptors/data/189.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d952 as d952 } from '../descriptors/data/42.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec1135"]:c1(),["SharedCodec1136"]:c2(),["SharedCodec1137"]:c3(),["SharedCodec1138"]:c4(),["SharedCodec1139"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
