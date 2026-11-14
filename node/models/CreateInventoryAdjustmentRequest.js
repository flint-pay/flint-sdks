import { d272 as c0 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6987 as c1 } from '../descriptors/data/329.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6989 as c2, d6991 as c3, d6996 as c9, d6997 as c10, d6998 as c11, d6999 as c12, d7000 as c13, d7001 as c14, d7002 as c15, d7003 as c19, d7004 as c20, d7005 as c21, d7006 as c22, d7007 as c23 } from '../descriptors/data/330.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7017 as c4, d7018 as c5, d7019 as c6, d7020 as c7, d7016 as c8, d7013 as c16, d7014 as c17, d7015 as c18 } from '../descriptors/data/331.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d272 as d272 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec305"]:c9(),["SharedCodec306"]:c10(),["SharedCodec307"]:c11(),["SharedCodec308"]:c12(),["SharedCodec309"]:c13(),["SharedCodec310"]:c14(),["SharedCodec311"]:c15(),["SharedCodec792"]:c16(),["SharedCodec793"]:c17(),["SharedCodec794"]:c18(),["SharedCodec795"]:c19(),["SharedCodec796"]:c20(),["SharedCodec797"]:c21(),["SharedCodec798"]:c22(),["SharedCodec799"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
