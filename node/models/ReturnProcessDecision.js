import { d4967 as c0 } from '../descriptors/data/227.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4977 as c1, d4978 as c2 } from '../descriptors/data/228.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4967 as d4967 } from '../descriptors/data/227.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4967;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec1078"]:c1(),["SharedCodec1079"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
