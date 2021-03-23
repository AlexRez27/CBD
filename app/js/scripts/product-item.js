"use strict"
Vue.component('star-rating', VueStarRating.default);

const product = Vue.component("product-item", {
    props: { "contents": Object },
    template: `
<div class="products__item">
    <div class="products__wrapper">
        <div class="products__rating">
        <star-rating :border-width="4" 
            border-color="#ffffff" 
            :rounded-corners="false" 
            :show-rating="false"
            :star-size="20"
            active-color="#6e774a"
            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
        ></star-rating>
        </div>
        <h2 class="products__name"> {{contents.name}} </h2>
        <img :src="contents.src" class="img products__img">
    </div>
    <div class="products__foot">
        <span class="products__price">{{contents.price}} USD</span>
        <button @click="increment" class="products__buy">
            <span>shop {{count > 0 ? count : ""}} </span>
            <span v-if="!count" class="dash"></span>
        </button>
    </div>

</div>
    `,
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count += 1;
            this.$emit("add-to-cart", this.contents);
        },
    }

})

