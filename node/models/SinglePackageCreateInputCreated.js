import { d2999 as c0 } from '../descriptors/data/114.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3889 as c1 } from '../descriptors/data/164.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2389 as c2 } from '../descriptors/data/94.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3044 as c3 } from '../descriptors/data/118.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2389 as d2389 } from '../descriptors/data/94.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Dimensions"]:c0(),["SharedCodec226"]:c1(),["SinglePackageCreateInputCreated"]:c2(),["Weight"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSinglePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
