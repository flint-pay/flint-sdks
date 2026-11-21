import { d302 as c0 } from '../descriptors/data/15.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9090 as c1, d9077 as c24, d9078 as c25, d9079 as c26, d9080 as c27 } from '../descriptors/data/411.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9042 as c3 } from '../descriptors/data/409.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9057 as c4, d9058 as c5, d9059 as c6, d9060 as c7, d9061 as c8, d9062 as c9, d9063 as c10, d9064 as c11, d9065 as c12, d9066 as c13, d9067 as c14, d9068 as c15, d9069 as c16, d9070 as c17, d9071 as c18, d9072 as c19, d9073 as c20, d9074 as c21, d9075 as c22, d9076 as c23 } from '../descriptors/data/410.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9126 as c28, d9127 as c29 } from '../descriptors/data/413.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d302 as d302 } from '../descriptors/data/15.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec217"]:c3(),["SharedCodec423"]:c4(),["SharedCodec424"]:c5(),["SharedCodec425"]:c6(),["SharedCodec426"]:c7(),["SharedCodec427"]:c8(),["SharedCodec428"]:c9(),["SharedCodec429"]:c10(),["SharedCodec430"]:c11(),["SharedCodec431"]:c12(),["SharedCodec432"]:c13(),["SharedCodec433"]:c14(),["SharedCodec434"]:c15(),["SharedCodec435"]:c16(),["SharedCodec436"]:c17(),["SharedCodec437"]:c18(),["SharedCodec438"]:c19(),["SharedCodec439"]:c20(),["SharedCodec440"]:c21(),["SharedCodec441"]:c22(),["SharedCodec442"]:c23(),["SharedCodec443"]:c24(),["SharedCodec444"]:c25(),["SharedCodec445"]:c26(),["SharedCodec446"]:c27(),["SharedCodec450"]:c28(),["SharedCodec451"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
