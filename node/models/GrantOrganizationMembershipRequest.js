import { d901 as c0 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d901 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d901;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GrantOrganizationMembershipRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGrantOrganizationMembershipRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
