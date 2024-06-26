import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: "networkAtom" ,
    default :{
        network: 104,
        jobs: 0,
        message: 10,
        notifications:0,
    }

});
export const TotalNotificationSelector = selector({
    key : "TotalNotificationSelector",
    get: ({get})=>{
        const allnotifications = get(networkAtom)
        return allnotifications.network + allnotifications.jobs + allnotifications.message +allnotifications.notifications
    }
})

//one way to write atoms separately

// export const jobsAtom = atom({
//     key: "jobskAtom" ,
//     default : 0,

// });

// export const messageAtom = atom({
//     key: "messageAtom" ,
//     default : 0,

// });

// export const notificationsAtom = atom({
//     key: "notifiactionsAtom" ,
//     default : 12

// });



