
Vue.component("modal", {
  props: { "baskets": Array },
  template: `
      <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
  
          <div class="modal-header">
          <h3 @click="showThis">Goods for shopping</h3>
            </div>
            <div class="modal-body">
              <slot name="body">
              <table class="modal__table">
                <tr>
                    <th class="modal__tr">Img</th>
                    <th class="modal__tr">Name</th>
                    <th class="modal__tr">Count</th>
                    <th class="modal__tr">Price</th>
                </tr>
                <tr class="modal__tr" v-for="(basket,i) in baskets" :key="i" >
                    <td class="modal__td"><img :src="basket.src" alt="product" width="50px" height="70px"></td>
                    <td class="modal__td">{{basket.name}} </td>
                    <td class="modal__td">{{basket.count}}</td>
                    <td class="modal__td">\${{basket.totalPrice}} USD</td>
                </tr>
                <tr class="modal__tr">
                    <td class="modal__td">Total:</td>
                    <td class="modal__td"></td>
                    <td class="modal__td"> {{totalCount}} </td>
                    <td class="modal__td">\${{totalPrice}} USD </td>
                </tr>
              </table>        
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
      `,
  methods: {
    showThis() {
      console.log(this.baskets)
    }
  },
  computed: {
    totalCount() {
      return totalCount = this.baskets.reduce((acc, element) => acc + element.count, 0)
    },
    totalPrice() {
      let totalPrice = this.baskets.reduce((acc, element) => acc + element.totalPrice, 0)
      return +totalPrice.toFixed(2)
    },
    price() {
      return +(this.baskets.price * this.baskets.count).toFixed(2)
    }
  }
})