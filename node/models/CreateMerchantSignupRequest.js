import { d292 as c0 } from '../descriptors/data/16.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8424 as c1 } from '../descriptors/data/399.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d292 as d292 } from '../descriptors/data/16.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMerchantSignupRequest"]:c0(),["MerchantSignupOwnerRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
