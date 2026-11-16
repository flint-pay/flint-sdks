import { d8428 as c0 } from '../descriptors/data/400.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6545 as c1 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6545 as d6545 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6545;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSignupTermsAcceptanceRequest"]:c0(),["VerifyMerchantSignupRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
