import { d289 as c0 } from '../descriptors/data/14.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c1 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8754 as c2 } from '../descriptors/data/393.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8769 as c3, d8770 as c4, d8771 as c5, d8772 as c6, d8773 as c7 } from '../descriptors/data/394.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8774 as c8, d8775 as c9, d8776 as c10, d8777 as c11, d8778 as c12, d8779 as c13, d8780 as c14, d8781 as c15, d8782 as c16, d8783 as c17, d8784 as c18, d8785 as c19, d8786 as c20, d8787 as c21, d8788 as c22, d8789 as c23, d8790 as c24, d8791 as c25, d8792 as c26 } from '../descriptors/data/395.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d289 as d289 } from '../descriptors/data/14.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d289;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec211"]:c2(),["SharedCodec413"]:c3(),["SharedCodec414"]:c4(),["SharedCodec415"]:c5(),["SharedCodec416"]:c6(),["SharedCodec417"]:c7(),["SharedCodec418"]:c8(),["SharedCodec419"]:c9(),["SharedCodec420"]:c10(),["SharedCodec421"]:c11(),["SharedCodec422"]:c12(),["SharedCodec423"]:c13(),["SharedCodec424"]:c14(),["SharedCodec425"]:c15(),["SharedCodec426"]:c16(),["SharedCodec427"]:c17(),["SharedCodec428"]:c18(),["SharedCodec429"]:c19(),["SharedCodec430"]:c20(),["SharedCodec431"]:c21(),["SharedCodec432"]:c22(),["SharedCodec433"]:c23(),["SharedCodec434"]:c24(),["SharedCodec435"]:c25(),["SharedCodec436"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
