const NFT_items = Vue.createApp({
    data(){
        return{
            nft_all_info: [
                {id: 1, image: "assets/image/NFT_items/image_1.png", title: "A", content: "This is good", path: "project_1.html"},
                {id: 2, image: "assets/image/NFT_items/image_2.png", title: "B", content: "This is bad", path: "project_2.html"},
                {id: 3, image: "assets/image/NFT_items/image_3.png", title: "C", content: "This soso", path: "project_3.html"},
                {id: 4, image: "assets/image/NFT_items/image_4.png", title: "D", content: "This is fine", path: "project_4.html"},
                {id: 5, image: "assets/image/NFT_items/image_5.png", title: "E", content: "This is fine", path: "project_5.html"},
                {id: 6, image: "assets/image/NFT_items/image_6.png", title: "F", content: "This is fine", path: "project_6.html"},
                {id: 7, image: "assets/image/NFT_items/image_7.png", title: "G", content: "This is fine", path: "project_7.html"},
            ]
        }
    }
})

NFT_items.component("nft-item", {
    props: {
        info: {
            type: Object,
            required: true
        }
    },

    template:
    /* html */
    `
    <div class="NFT-item-info" @click="goToHTML()" >
        <img :src="info.image">
        <div>
            <div>
                <span style="font-size: 25px">{{ info.title }}</span>
            </div>
            <div>
                <span style="font-size: 17px">{{ info.content }}</span>
            </div>
        </div>
    </div>
    `,

    methods: {
        goToHTML(){
            window.location.href = this.info.path
        }
    },
})