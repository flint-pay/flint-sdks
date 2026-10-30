import { d4398 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1104 as c2, d1105 as c3 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1236 as c4, d1237 as c7, d1238 as c8 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6672 as c5 } from '../descriptors/data/316.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6673 as c6, d6676 as c10, d6679 as c14, d6680 as c15 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1254 as c9 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6541 as c11, d6542 as c12, d6543 as c13 } from '../descriptors/data/308.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6596 as c16, d6597 as c17, d6598 as c18, d6599 as c19, d6600 as c20, d6604 as c21, d6605 as c22, d6606 as c23 } from '../descriptors/data/312.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5419 as c24 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6742 as c25 } from '../descriptors/data/320.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4602 as c26 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1105 as d1105 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ProcessExistingReturnLineItemRequest"]:c2(),["ProcessExistingReturnRequest"]:c3(),["ReturnProcessDecision"]:c4(),["ReturnProcessDispositionRequest"]:c5(),["ReturnProcessInspectionRequest"]:c6(),["ReturnProcessReceiptRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["ReturnSourceSystemRequest"]:c10(),["SharedCodec1159"]:c11(),["SharedCodec1160"]:c12(),["SharedCodec1161"]:c13(),["SharedCodec1168"]:c14(),["SharedCodec1169"]:c15(),["SharedCodec1204"]:c16(),["SharedCodec1205"]:c17(),["SharedCodec1206"]:c18(),["SharedCodec1207"]:c19(),["SharedCodec1208"]:c20(),["SharedCodec1209"]:c21(),["SharedCodec1210"]:c22(),["SharedCodec1211"]:c23(),["SharedCodec231"]:c24(),["SharedCodec310"]:c25(),["SharedCodec85"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
