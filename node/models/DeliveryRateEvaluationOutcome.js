import { d674 as c0 } from '../descriptors/data/37.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d681 as c1 } from '../descriptors/data/38.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1878 as c3, d1879 as c4, d1880 as c5, d1881 as c6 } from '../descriptors/data/93.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1882 as c7, d1883 as c8 } from '../descriptors/data/94.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8484 as c9, d8486 as c10 } from '../descriptors/data/375.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8487 as c11, d8490 as c12 } from '../descriptors/data/376.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d674 as d674 } from '../descriptors/data/37.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d674;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1021"]:c3(),["SharedCodec1022"]:c4(),["SharedCodec1023"]:c5(),["SharedCodec1024"]:c6(),["SharedCodec1025"]:c7(),["SharedCodec1026"]:c8(),["SharedCodec195"]:c9(),["SharedCodec197"]:c10(),["SharedCodec198"]:c11(),["SharedCodec201"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
