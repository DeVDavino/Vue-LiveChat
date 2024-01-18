import { ref, watchEffect } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    // added into a variable because we will use it in multiple places
    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')
    // Setup a realtime listener to the firestore database
    // cycle through all the snapshots and add them to the results array
    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            // object with all of the data properties of a message, being pushed to the results array
            // if doc.data().createdAt doesn't exist, it will only use the local data properties. this line of code is needed to get the actual snapshot of the database
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        // when all of the documents are in the array, push them to the results array
        documents.value = results
        error.value = null
    }, (error) => {
        console.log(error.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) =>{
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection