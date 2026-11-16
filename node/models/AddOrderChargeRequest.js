import { d9 as c0 } from '../descriptors/data/0.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c1 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9561 as c3, d9563 as c4 } from '../descriptors/data/439.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9578 as c5, d9579 as c6 } from '../descriptors/data/440.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9113 as c7, d9115 as c8 } from '../descriptors/data/411.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9659 as c9, d9660 as c10, d9661 as c11 } from '../descriptors/data/444.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9 as d9 } from '../descriptors/data/0.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderCalculatedChargeTaxRequest"]:c3(),["OrderChargeRequest"]:c4(),["SharedCodec1813"]:c5(),["SharedCodec1814"]:c6(),["SharedCodec497"]:c7(),["SharedCodec499"]:c8(),["TaxCalculationRequestRequest"]:c9(),["TaxComponentRequestRequest"]:c10(),["TaxJurisdictionRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
