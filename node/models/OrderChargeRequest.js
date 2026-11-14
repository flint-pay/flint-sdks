import { d5911 as c0 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7703 as c2, d7705 as c3, d7720 as c4 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7721 as c5 } from '../descriptors/data/371.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7257 as c6 } from '../descriptors/data/341.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7259 as c7 } from '../descriptors/data/342.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7799 as c8, d7800 as c9, d7801 as c10 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7705 as d7705 } from '../descriptors/data/370.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTaxRequest"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec1064"]:c4(),["SharedCodec1065"]:c5(),["SharedCodec350"]:c6(),["SharedCodec352"]:c7(),["TaxCalculationRequestRequest"]:c8(),["TaxComponentRequestRequest"]:c9(),["TaxJurisdictionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
