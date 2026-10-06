import { d64 as c0, d2312 as c1, d63 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d64 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d64;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["SelectedProductOption"]:c1(),["SharedCodec17"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
