import { d614 as c0, d608 as c1, d598 as c2, d606 as c3, d607 as c4, d610 as c5, d609 as c6, d611 as c7, d613 as c8, d612 as c9, d2202 as c10, d2210 as c11, d600 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2210 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec192"]:c3(),["SharedCodec193"]:c4(),["SharedCodec194"]:c5(),["SharedCodec195"]:c6(),["SharedCodec196"]:c7(),["SharedCodec197"]:c8(),["SharedCodec198"]:c9(),["SharedCodec565"]:c10(),["UpdateDeliveryProfileRequest"]:c11(),["Weight"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
