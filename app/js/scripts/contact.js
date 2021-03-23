Vue.component("contact", {
    props: {
        'email': String,
    },
    template: `
    <form action="№" class="contact__form" @submit.prevent="submitHandler">
                        <legend class="contact__legend">Subscribe to Newsletter</legend>
                        
                        <div class="contact__subscribe">
                        <input placeholder="Email" 
                                type="email" 
                                class="contact__email"
                                v-model.lazy="email"
                                required
                            >
                            <button  type="submit" class="contact__submit">
                                <div class="contact__btn"><i class="icon-arrow"></i></div>
                                <FlashMessage><FlashMessage/>
                            </button>
                            </div>
                            <div v-if="state">
                                <div v-if="isShown" class="flash flash--red">You have already subscribed</div>
                                <div v-else class="flash flash--green">You have succesfully subscribed</div>
                            </div>
                            </form>
    `,
    data() {
        return {
            state: false,
            isShown: false,
            stor: []
        }
    },
    methods: {
        submitHandler() {
            //stor = []
            if (localStorage.email) {
                this.stor = localStorage.email.split(",")

                if (this.stor.includes(this.email)) {
                    this.isShown = true
                    this.state = true
                } else {
                    this.stor.push(this.email)
                    localStorage.setItem("email", this.stor)
                    this.state = true
                    this.isShown = false
                }
            } else {
                this.stor.push(this.email)
                localStorage.setItem("email", this.stor)
            }
            this.email = ""
            setTimeout(() => this.state = false, 4000);
        }
    },
})