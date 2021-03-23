Vue.component("login", {
    template: `
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container modal-container--login">

        <div class="modal-header">
        <h3 class="login__h3" >Login</h3>
          </div>
          <div class="modal-body modal-body--login">
            <slot name="body">         
            <form action="" class="login">
                <input @input="emptyName" :class="{ invalid: !login }" v-model.trim="login" class="login__input" placeholder="Login" type="name">
                <small class="small" :class="{ small__show: errorName }"> Enter your login </small>
                <input @input="emptyPass" :class="{ invalid: !password }" v-model.trim="password" class="login__input" placeholder="your password" type="password">
                <small class="small" :class="{ small__show: erorrPass }"> Enter your password </small>
                <button type="submit" class="modal-default-button"  v-on:click.prevent="empty">
                Sign In
              </button>
            </form>  
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
    `,
    data() {
        return {
            login: "",
            password: "",
            isFilled: false,
            errorName: false,
            erorrPass: false
        }
    },
    methods: {
        empty() {
            if (this.login && this.password) {
                this.isFilled = true
                this.$parent.showLogin = false
                this.$parent.login = this.login
            } else if (!this.login && !this.password) {
                this.errorName = true
                this.erorrPass = true
            } else if (!this.password) {
                this.erorrPass = true
            } else if (!this.name) {
                this.errorName = true
            }
            console.log(this.isFilled)
        },
        emptyName() {
            this.errorName = false
        },
        emptyPass() {
            this.erorrPass = false
        }
    }
})