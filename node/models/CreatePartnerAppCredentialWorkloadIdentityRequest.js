import { d355 as c0 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10072 as c1 } from '../descriptors/data/468.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10127 as c2 } from '../descriptors/data/470.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d355 as d355 } from '../descriptors/data/20.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d355;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialWorkloadIdentityRequest"]:c0(),["PartnerAppCredentialWorkloadIdentityRequest"]:c1(),["WorkloadIdentityClaimConditionRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
