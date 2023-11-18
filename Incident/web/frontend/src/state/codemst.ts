import {atom, selector}   from 'recoil';

const codemstAtom = atom({
    key: 'codemst',
    default: {
        id:1,code1:'0000',code2:'000',codename1:'',codename2:'',activeflg:''
    }
});

const allcodemstAtom = atom({
    key: 'allcodemst',
    default: [
        {
            id:1,code1:'0000',code2:'000',codename1:'',codename2:'',activeflg:''
        }
    ]
});

const allcodemstState = selector({
    key: 'allcodemst',
    get: ({get}) => get(allcodemstAtom),
    set: ({set}, newValue) => { set(allcodemstAtom, newValue);
    },

})
export {codemstAtom,allcodemstAtom,allcodemstState};