import { d170 as c0 } from '../descriptors/data/8.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3983 as c1 } from '../descriptors/data/168.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3985 as c2, d3987 as c3, d3990 as c9, d3992 as c10, d3993 as c11, d3994 as c12, d3995 as c13, d3996 as c14, d3997 as c15, d3999 as c19, d4000 as c20, d4001 as c21, d4002 as c22, d4003 as c23 } from '../descriptors/data/169.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4012 as c4, d4013 as c5, d4014 as c6, d4015 as c7, d4011 as c8, d4008 as c16, d4009 as c17, d4010 as c18 } from '../descriptors/data/170.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d170 as d170 } from '../descriptors/data/8.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d170;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec147"]:c5(),["SharedCodec148"]:c6(),["SharedCodec149"]:c7(),["SharedCodec150"]:c8(),["SharedCodec151"]:c9(),["SharedCodec152"]:c10(),["SharedCodec153"]:c11(),["SharedCodec154"]:c12(),["SharedCodec155"]:c13(),["SharedCodec156"]:c14(),["SharedCodec157"]:c15(),["SharedCodec837"]:c16(),["SharedCodec838"]:c17(),["SharedCodec839"]:c18(),["SharedCodec840"]:c19(),["SharedCodec841"]:c20(),["SharedCodec842"]:c21(),["SharedCodec843"]:c22(),["SharedCodec844"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
