import { d419 as c0 } from '../descriptors/data/23.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d419 as d419 } from '../descriptors/data/23.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d419;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GrantOrganizationMembershipRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGrantOrganizationMembershipRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
