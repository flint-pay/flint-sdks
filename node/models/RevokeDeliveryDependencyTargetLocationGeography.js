import { d936 as c0 } from '../descriptors/data/42.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3696 as c1, d3697 as c2 } from '../descriptors/data/153.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d936 as d936 } from '../descriptors/data/42.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d936;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetLocationGeography"]:c0(),["SharedCodec1115"]:c1(),["SharedCodec1116"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetLocationGeography(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
