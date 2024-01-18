<template>
    <div class="chat-window">
        <!-- Your component content here -->
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at">{{ doc.createdAt }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>

    </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
// import library to format the timestamps of the documents
import { formatDistanceToNow} from 'date-fns'
import { computed, onUpdated, ref } from 'vue'


export default {
    name: 'ChatWindow',
    // Your component options here
    setup(){
        const {error, documents } = getCollection('messages')

        const formattedDocuments = computed(() => {
            if(documents.value){
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    // has all of original the properties of doc, but also has an overrided createdAt property
                    return { ...doc, createdAt: time}
                })
            }
        })

        // auto-scroll to bottom of messages
        const messages = ref(null)

        // updates the scroll position whenever the documents change
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return {error, documents, formattedDocuments, messages}
    }
}
</script>

<style scoped>
/* Your component styles here */
    .chat-window{
        background: #fafafa;
        padding: 30px 20px;
    }

    .single{
        margin: 18px 0px;
    }

    .created-at{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px; 
    }

    .name{
        font-weight: bold;
        margin-right: 6px;
    }

    .messages{
        max-height: 400px;
        overflow-y: auto;
    }
</style>
