const functions = require("firebase-functions");
const Filter=require('bad-words')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const admin=require('firebase-admin');
const { useCollectionData } = require("react-firebase-hooks/firestore");
admin.initializeApp()

const db=admin.firestore()

exports.detectBadUsers=functions.firestore
.document('messages/{msgId}')
.onCreate(async(doc,ctx)=>{
    const filter=new Filter()
    const {text,uid}=doc.data()

    if (filter.isProfane(text)){
        const cleaned=filter.clean(text)
        await doc.ref.update({text:`I got blocked for saying ${cleaned}`})

        collection('banned').doc(uid).set({});
    }
})
