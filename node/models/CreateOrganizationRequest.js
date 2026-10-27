import { d187 as c0 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d187 as d187 } from '../descriptors/data/9.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrganizationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrganizationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
