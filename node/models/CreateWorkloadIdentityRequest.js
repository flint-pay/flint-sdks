import { d394 as c0 } from '../descriptors/data/24.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6694 as c1 } from '../descriptors/data/299.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6642 as c2 } from '../descriptors/data/296.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8749 as c3 } from '../descriptors/data/417.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d394 as d394 } from '../descriptors/data/24.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWorkloadIdentityRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["WorkloadIdentityClaimConditionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
