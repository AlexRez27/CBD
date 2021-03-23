"use strict"

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f);
    },
});

function isInArray(id, arr) {
    if (arr.some(e => e.id === id)) {
        return true;
    }
    return false;
}

new Vue({
    el: '#app',
    data: {
        itemsLeftDesktop: [
            {
                name: "home",
                show: false,
            },
            {
                name: "products",
                show: false,
            },
            {
                name: "FAQS",
                show: false,
            },
            {
                name: "contact us",
                show: false,
            },
            // 'home', 'products', 'faqs', 'contact us'
        ],
        tabs: [
            {
                name: "what is cbd",
                show: false,

            },
            {
                name: "benefits",
                show: false,
            },
            {
                name: "our difference",
                show: false,
            }
        ],
        contents: [
            {
                id: 0,
                name: "CBD 500 mg Orange Flavor Tincture",
                src: "./imgo/product-1.png",
                price: 49.99,
                count: 0,
                totalPrice: 0.00,
            }
            ,
            {
                id: 1,
                name: "lack ICE CBD Muscle Rub 200 mg",
                src: "./imgo/product-2.png",
                price: 49.99,
                count: 0,
                totalPrice: 0.00,
            },
            {
                id: 2,
                name: "CBD+Curcumin Coffee 750 mg",
                src: "./imgo/product-3.png",
                price: 79.99,
                count: 0,
                totalPrice: 0.00,
            },
            {
                id: 0,
                name: "CBD 500 mg Orange Flavor Tincture",
                src: "./imgo/product-1.png",
                price: 49.99,
                count: 0,
                totalPrice: 0.00,
            }
            ,
            {
                id: 1,
                name: "lack ICE CBD Muscle Rub 200 mg",
                src: "./imgo/product-2.png",
                price: 49.99,
                count: 0,
                totalPrice: 0.00,
            },
            {
                id: 2,
                name: "CBD+Curcumin Coffee 750 mg",
                src: "./imgo/product-3.png",
                price: 79.99,
                count: 0,
                totalPrice: 0.00,
            }
        ],
        show: false,
        activetab: 1,
        cart: [],
        totalCount: 0,
        showModal: false,
        content: data,
        stor: [],
        showSearch: false,
        query: "",
        showClassTabsName: true,
        showLogin: false,
        login: 'login',
        //tabHover: falses
    },
    // mounted() {
    //     this.focusInput();
    // },
    methods: {
        closeLogin() {
            this.showLogin = false
            this.login = this.$children.login.login
        },
        clickedLine(ar, i) {
            const l = ar.length
            for (let j = 0; j < l; j++) {
                if (j != i) {
                    ar[j].show = false
                }
            }
            if (ar[i].show) {
                ar[i].show = false
            } else {
                ar[i].show = true
            }
        },
        link(i) {
            return `#${this.itemsLeftDesktop[i].name}`
        },
        handleScroll(evt, el) {
            if (window.scrollY) {
                el.setAttribute("style", "background-color: #cad0dc;")
            } else {
                el.removeAttribute("style")
            }
        },
        incrementTotal(ob) {
            let ar = this.cart
            let index = ar.findIndex(x => x.id === ob.id)
            if (index > -1) {
                ar[index].count = ar[index].count + 1
                ar[index].totalPrice = ar[index].totalPrice + ar[index].price
                ar[index].totalPrice = +ar[index].totalPrice.toFixed(2)
            } else {
                ob.count += 1;
                ob.totalPrice = ob.price;
                ar.push(ob)
            }
            this.totalCount += 1
        }
        ,
        searchInfo() {
            let googleQuery = 'https://www.google.com/search?q='
            googleQuery = googleQuery + this.query
            console.log(googleQuery)
            this.query = ""
            this.showSearch = false
            window.open(googleQuery, '_blank');
        },
        showInput() {
            this.showSearch = !this.showSearch
            this.$nextTick(() => {
                this.focusInput();
            });
        },
        focusInput() {
            if (this.$refs.input) {
                this.$refs.input.focus();
            }
        }
    }
})

console.log("test")



$('.products__slider').slick({
    //lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
    ]
});

$('.testimonials__slider').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 3500,
    autoplay: true,
    slidesToShow: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $(".testimonials__prev"),
    nextArrow: $(".testimonials__next"),
});
