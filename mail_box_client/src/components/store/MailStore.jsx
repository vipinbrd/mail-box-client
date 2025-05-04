import { configureStore } from "@reduxjs/toolkit";
import { AllMailReducer } from "./AllMailReducer";
import { SentReducer } from "./SentReducer";
import { TrashReducer } from "./TrashReducer";
import { InboxReducer } from "./InboxReducer";
import { DraftReducer } from "./DraftReducer";


 export const MailStore=configureStore({
    reducer:{
        allMail:AllMailReducer.reducer,
        sentMail:SentReducer.reducer,
        trashMail:TrashReducer.reducer,
        inboxMail:InboxReducer.reducer,
        draftMail:DraftReducer.reducer,
    }
    
})