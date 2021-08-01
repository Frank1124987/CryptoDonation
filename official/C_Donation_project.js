const Donation_projects = Vue.createApp({
    data(){
        return{
            project_all_info: [
                {id: 1, image: "assets/image/DonationProject/image_1.jpg", title: "SDD", content: "抖內給帥哥", path: "project_1.html"},
                {id: 2, image: "assets/image/DonationProject/image_2.jpg", title: "B", content: "This is bad", path: "project_2.html"},
                {id: 3, image: "assets/image/DonationProject/image_3.png", title: "C", content: "This soso", path: "project_3.html"},
                {id: 4, image: "assets/image/DonationProject/image_4.png", title: "D", content: "This is fine", path: "project_4.html"},
            ]
        }
    }
})

Donation_projects.component("donation-project", {
    props: {
        info: {
            type: Object,
            required: true
        }
    },

    template:
    /* html */
    `
    <div class="Donation-project-info" @click="goToHTML()" >
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