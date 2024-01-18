import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

// Every time we use this function, we will pass in a collection name and or create a new version of this error
const useCollection = (collection) => {

    const error = ref(null)

    const addDoc =  async (doc) =>{
        error.value = null 

        try {
            // get chat object from firestore
            await projectFirestore.collection(collection).add(doc)
        }catch(err){
            console.error(err.message)
            error.value = 'could not send the message'
        }
    }

    return { error, addDoc }
}

export default useCollection