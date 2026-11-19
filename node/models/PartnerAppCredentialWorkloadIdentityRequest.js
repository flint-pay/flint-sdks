import { d10057 as c0 } from '../descriptors/data/468.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10112 as c1 } from '../descriptors/data/470.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10057 as d10057 } from '../descriptors/data/468.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10057;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppCredentialWorkloadIdentityRequest"]:c0(),["WorkloadIdentityClaimConditionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
