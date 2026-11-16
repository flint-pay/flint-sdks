import { d295 as c0 } from '../descriptors/data/15.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8802 as c1 } from '../descriptors/data/396.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8754 as c3 } from '../descriptors/data/393.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8769 as c4, d8770 as c5, d8771 as c6, d8772 as c7, d8773 as c8 } from '../descriptors/data/394.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8774 as c9, d8775 as c10, d8776 as c11, d8777 as c12, d8778 as c13, d8779 as c14, d8780 as c15, d8781 as c16, d8782 as c17, d8783 as c18, d8784 as c19, d8785 as c20, d8786 as c21, d8787 as c22, d8788 as c23, d8789 as c24, d8790 as c25, d8791 as c26, d8792 as c27 } from '../descriptors/data/395.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8838 as c28, d8839 as c29 } from '../descriptors/data/397.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d295 as d295 } from '../descriptors/data/15.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec211"]:c3(),["SharedCodec413"]:c4(),["SharedCodec414"]:c5(),["SharedCodec415"]:c6(),["SharedCodec416"]:c7(),["SharedCodec417"]:c8(),["SharedCodec418"]:c9(),["SharedCodec419"]:c10(),["SharedCodec420"]:c11(),["SharedCodec421"]:c12(),["SharedCodec422"]:c13(),["SharedCodec423"]:c14(),["SharedCodec424"]:c15(),["SharedCodec425"]:c16(),["SharedCodec426"]:c17(),["SharedCodec427"]:c18(),["SharedCodec428"]:c19(),["SharedCodec429"]:c20(),["SharedCodec430"]:c21(),["SharedCodec431"]:c22(),["SharedCodec432"]:c23(),["SharedCodec433"]:c24(),["SharedCodec434"]:c25(),["SharedCodec435"]:c26(),["SharedCodec436"]:c27(),["SharedCodec440"]:c28(),["SharedCodec441"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
