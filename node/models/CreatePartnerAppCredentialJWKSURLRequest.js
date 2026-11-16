import { d312 as c0 } from '../descriptors/data/18.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8690 as c1 } from '../descriptors/data/415.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d312 as d312 } from '../descriptors/data/18.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d312;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePartnerAppCredentialJWKSURLRequest"]:c0(),["PartnerAppCredentialJWKSURLRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePartnerAppCredentialJWKSURLRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
