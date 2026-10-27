import { d105 as c0 } from '../descriptors/data/4.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d105 as d105 } from '../descriptors/data/4.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmCustomerVerificationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
