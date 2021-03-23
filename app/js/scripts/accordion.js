
const data = [
  {
    id: 1,
    active: false,
    showIcon: false,
    title: 'What is Cannabidiol (CBD)? ',
    details: `
        CBD is short for cannabidiol. It is a phytocannabinoid found in hemp
                                and known for supporting the body and mind in many ways.* Charlotte’s Web products have
                                cannabinoids with CBD extract.
      `
  },
  {
    id: 2,
    active: false,
    showIcon: false,
    title: 'Is Hemp-Derived Cannabidiol (CBD) Legal? ',
    details: `
        Not to be confused with oil from hemp seeds (which doesn’t contain
            cannabinoids), CBD
            comes from the flowers and leaves of the hemp plant.
            `
  },
  {
    id: 3,
    active: false,
    showIcon: false,
    title: `Are there any negative side effects? `,
    details: `
        Why does CBD work? The human body has a vast network of receptors,
                                the endocannabinoid
                                system.
      `
  },
  {
    id: 4,
    active: false,
    showIcon: false,
    title: `Do you offer a return policy?`,
    details: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque hic voluptate
                            nesciunt numquam, eos ullam non temporibus, labore ea ad modi quas accusamus reprehenderit
                            impedit tempore illo pariatur sunt!
      `
  }
]

Vue.component('accordion', {
  props: {
    content: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      groupId: null
    }
  },
  template: `
      <div class="accordion__box">
        <accordion-item
          v-for="item in content"
          :item="item"
          :groupId="groupId"
          :key="item.id"
          >
        </accordion-item>
      </div>
    `,
  mounted() {
    this.groupId = this.$el.id
  }
})

Vue.component('accordion-item', {
  props: ['item', 'groupId'],
  template: `
      <div :id="groupId + '-' + item.id" class="accordion__item" :class="{'is-active': item.active}">
        <div class="accordion__title">
          <button @click="toggle" class="accordion__trigger">
            <i v-if="!item.showIcon" 
                class="fas fa-plus accordion__icon"
            >
            </i>
            <i v-else 
                class="fas fa-minus accordion__icon"
            >
           </i>
        <span class="accordion__text">{{item.title}}</span>
          </button>
        </div>
        <transition
          name="accordion-item"
          @enter="startTransition"
          @after-enter="endTransition"
          @before-leave="startTransition"
          @after-leave="endTransition">
          <div v-if="item.active" class="accordion__details">
            <div class="accordion__inner"> <p class="accordion__answer"> {{item.details}} </p> </div>
          </div>
        </transition>
      </div>
    `,
  methods: {
    toggle(event) {
      this.$parent.$children.forEach((item, index) => {
        if (item.$el.id === event.currentTarget.parentElement.parentElement.id) {
          item.item.active = !item.item.active
          item.item.showIcon = !item.item.showIcon
        }
        else {
          item.item.active = false;
          item.item.showIcon = false
        }
        //this.showIcon = !this.showIcon
      })
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    }
  }
})