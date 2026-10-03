import { d901 as c0 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d901 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GrantOrganizationMembershipRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGrantOrganizationMembershipRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
