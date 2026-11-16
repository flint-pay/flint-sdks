import { d6844 as c0, d6842 as c5, d6843 as c6 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7111 as c1 } from '../descriptors/data/323.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d222 as c2 } from '../descriptors/data/10.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7161 as c3, d7152 as c7, d7153 as c8 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c4 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7141 as c9, d7149 as c10 } from '../descriptors/data/325.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d222 as d222 } from '../descriptors/data/10.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d222;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerAddressRequest"]:c1(),["CreateCustomerRequest"]:c2(),["DocumentTaxIDRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec0"]:c5(),["SharedCodec1"]:c6(),["SharedCodec1321"]:c7(),["SharedCodec1322"]:c8(),["SharedCodec306"]:c9(),["TaxIdentityPatch"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
