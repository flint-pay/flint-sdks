import { d9 as c0 } from '../descriptors/data/0.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c1 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9904 as c3, d9906 as c4 } from '../descriptors/data/460.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9921 as c5, d9922 as c6 } from '../descriptors/data/461.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9402 as c7, d9404 as c8 } from '../descriptors/data/427.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10002 as c9, d10003 as c10, d10004 as c11 } from '../descriptors/data/465.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9 as d9 } from '../descriptors/data/0.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderCalculatedChargeTaxRequest"]:c3(),["OrderChargeRequest"]:c4(),["SharedCodec1873"]:c5(),["SharedCodec1874"]:c6(),["SharedCodec504"]:c7(),["SharedCodec506"]:c8(),["TaxCalculationRequestRequest"]:c9(),["TaxComponentRequestRequest"]:c10(),["TaxJurisdictionRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
