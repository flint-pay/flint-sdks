import { d7154 as c0 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c2 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7123 as c3 } from '../descriptors/data/324.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6989 as c4, d6990 as c5, d6991 as c6, d6992 as c7 } from '../descriptors/data/317.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6470 as c8 } from '../descriptors/data/282.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6470 as d6470 } from '../descriptors/data/282.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6470;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec2406"]:c1(),["SharedCodec2409"]:c2(),["SharedCodec2416"]:c3(),["SharedCodec614"]:c4(),["SharedCodec615"]:c5(),["SharedCodec616"]:c6(),["SharedCodec617"]:c7(),["UpdateCustomerTaxExemptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
