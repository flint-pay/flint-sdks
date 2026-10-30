import { d4398 as c0 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1104 as c2 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1236 as c3, d1238 as c6 } from '../descriptors/data/58.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6672 as c4 } from '../descriptors/data/316.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6673 as c5, d6679 as c8, d6680 as c9 } from '../descriptors/data/317.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1254 as c7 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6596 as c10, d6597 as c11, d6598 as c12, d6599 as c13, d6600 as c14, d6604 as c15, d6605 as c16, d6606 as c17 } from '../descriptors/data/312.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6742 as c18 } from '../descriptors/data/320.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4602 as c19 } from '../descriptors/data/198.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1104 as d1104 } from '../descriptors/data/52.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["ProcessExistingReturnLineItemRequest"]:c2(),["ReturnProcessDecision"]:c3(),["ReturnProcessDispositionRequest"]:c4(),["ReturnProcessInspectionRequest"]:c5(),["ReturnProcessResolutionRequest"]:c6(),["ReturnReplacementLineItemRequest"]:c7(),["SharedCodec1168"]:c8(),["SharedCodec1169"]:c9(),["SharedCodec1204"]:c10(),["SharedCodec1205"]:c11(),["SharedCodec1206"]:c12(),["SharedCodec1207"]:c13(),["SharedCodec1208"]:c14(),["SharedCodec1209"]:c15(),["SharedCodec1210"]:c16(),["SharedCodec1211"]:c17(),["SharedCodec310"]:c18(),["SharedCodec85"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
