import axios from "axios";
import { IUnitRequestBody } from "./interfaces/IUnitRequestBody";
import { v4 as uuidv4 } from 'uuid';

const INTERVAL_MILIS: number = 1000;
const DISPATCH_POST_ENDPOINT = "";
const DEVICE_ID = uuidv4();

const randomInRange = (n0: number, n1: number): number => {
    return n0 + (n1 - n0) * Math.random();
};

const randomUnitRequestFactory = (): IUnitRequestBody => ({
    deviceId: DEVICE_ID,
    heartRate: randomInRange(100, 120),
    temprature: randomInRange(25, 27),
});
const dispatchMethod = () => {
    let randomData = randomUnitRequestFactory();
    console.log(randomData);
    // axios.post(DISPATCH_POST_ENDPOINT, randomData);
};

setInterval(dispatchMethod, INTERVAL_MILIS);
